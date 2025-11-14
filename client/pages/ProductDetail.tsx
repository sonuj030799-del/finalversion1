import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { getById, listByCategory } from "@/data/catalog";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function currency(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => getById(String(id)), [id]);
  const navigate = useNavigate();
  const location = useLocation();
  const { add, setCustomMessage: setCartCustomMessage } = useCart();
  const { toast } = useToast();
  const [qty, setQty] = useState(25); // Start with minimum quantity
  const [isAdded, setIsAdded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [customMessage, setCustomMessage] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleQuantityChange = (newQty: number) => {
    if (newQty < 25) {
      toast({
        title: "Minimum Order Quantity",
        description: "Quantity cannot be less than 25 pieces",
        variant: "destructive"
      });
      setQty(25);
    } else {
      setQty(newQty);
    }
  };

  // Ensure there's a products-page history entry so browser Back returns there.
  useEffect(() => {
    const from = (location.state as any)?.from;
    console.debug('ProductDetail mount', { id, from, historyLength: window.history.length, href: window.location.href });
    if (!from) return;
    try {
      const current = location.pathname + location.search;
      console.debug('ProductDetail pushing history', { from, current });
      // Push the originating products URL then re-push the current product URL
      // This guarantees a reliable previous entry for the browser Back button.
      window.history.pushState({}, '', from);
      window.history.pushState({}, '', current);
      console.debug('ProductDetail after push', { historyLength: window.history.length });
    } catch (err) {
      // ignore failures (older browsers / CSP)
    }
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <p className="mt-2 text-muted-foreground">The product does not exist.</p>
        <Link to="/products" className="underline">Back to products</Link>
      </div>
    );
  }

  const handleBack = () => {
    // Prefer a `from` location passed in Link state (preserves query params). Fallback to history back.
    const from = (location.state as any)?.from;
    if (from) {
      navigate(from);
    } else {
      navigate(-1);
    }
  };

  const related = listByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  // Get all images - use the images array if available, otherwise use just the main image
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const currentImage = allImages[selectedImageIndex] || product.image;

  const handleAddToCart = () => {
    add(product, qty);
    if (customMessage) {
      setCartCustomMessage(product.id, customMessage);
    }
    setIsAdded(true); // disable button after adding
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto py-12">
      <button onClick={handleBack} className="mb-6 text-sm text-primary hover:underline flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" /> Back
      </button>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="w-full aspect-square rounded-2xl overflow-hidden bg-accent cursor-pointer hover:opacity-90 transition"
          >
            <img src={currentImage} alt={product.name} className="h-full w-full object-cover" />
          </button>

          {allImages.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    selectedImageIndex === index
                      ? 'border-primary shadow-md'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="font-serif text-3xl">{product.name}</h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-2xl font-semibold">{currency(product.price)}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">{currency(product.originalPrice!)}</span>
            )}
          </div>
          <div className="mt-4 text-bold whitespace-pre-line">
            {product.description}
          </div>

          <div className="mt-6">
            <div className="text-sm text-muted-foreground mb-2">
              Minimum order: 25 pieces
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-md">
                <button 
                  className="px-3 h-10" 
                  onClick={() => handleQuantityChange(qty - 1)}
                  title="Decrease quantity (minimum 25)"
                >-</button>
                <input
                  className="w-16 h-10 text-center"
                  value={qty}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  type="number"
                  min={25}
                />
                <button 
                  className="px-3 h-10" 
                  onClick={() => handleQuantityChange(qty + 1)}
                  title="Increase quantity"
                >+</button>
              </div>
              <Button
                className="h-10 px-6"
                onClick={handleAddToCart}
                disabled={isAdded || qty < 25}
              >
                {isAdded ? "Added ✅" : "Add to Cart"}
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              💬 Custom Message (Optional)
            </label>
            <textarea
              placeholder="Add a personalized message (up to 1000 characters)..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              maxLength={1000}
              rows={4}
              className="w-full px-3 py-2 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {customMessage.length}/1000
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.id} to={`/product/${r.id}`} className="block">
                <div className="aspect-square rounded-lg overflow-hidden bg-accent">
                  <img src={r.image} alt={r.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-2 text-sm font-medium">{r.name}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-contain"
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition bg-black/40 hover:bg-black/60 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition bg-black/40 hover:bg-black/60 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`h-2 rounded-full transition ${
                        index === selectedImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 w-2 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
