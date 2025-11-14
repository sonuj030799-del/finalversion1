import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart";
import { useToast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export type Product = import("@shared/api").Product;

export default function ProductCard({ product }: { product: Product }) {
  const { add, setQty, state } = useCart();
  const { toast } = useToast();
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();

  // Get all images for auto-rotation
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discount = hasDiscount
    ? Math.round(((product.originalPrice as number) - product.price) / (product.originalPrice as number) * 100)
    : 0;

  const cartItem = state.items.find(item => item.id === product.id);
  const currentQty = cartItem?.qty || 0;

  const handleAddToCart = () => {
    // Add with minimum quantity of 25
    add(product, 25);
    const totalItems = state.items.reduce((sum, item) => sum + item.qty, 0) + 25;
    toast({
      title: "Added to Cart! 🛒",
      description: `Added ${25} items to cart. Total items: ${totalItems}`,
    });
  };

  const handleIncrement = () => {
    // Increment by 1 after initial minimum quantity
    setQty(product.id, currentQty + 1);
    const totalItems = state.items.reduce((sum, item) => sum + item.qty, 0) + 1;
    toast({
      title: "Updated Cart 🛒",
      description: `Total items in cart: ${totalItems}`,
    });
  };

  const handleDecrement = () => {
    if (currentQty > 25) {
      setQty(product.id, currentQty - 1);
      const totalItems = state.items.reduce((sum, item) => sum + item.qty, 0) - 1;
      toast({
        title: "Updated Cart 🛒",
        description: `Total items in cart: ${totalItems}`,
      });
    } else {
      toast({
        title: "Minimum Order Quantity",
        description: "Cannot reduce below 25 pieces per item",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="group rounded-lg md:rounded-xl border border-border bg-white overflow-hidden shadow-sm transition hover:shadow-md w-full flex flex-col">
  <Link
    to={`/product/${product.id}`}
    state={{ from: location.pathname + location.search }}
    className="block flex-1"
    onClick={(e) => {
      // If user opened in new tab / used modifier keys, don't modify history.
      if ((e as any).ctrlKey || (e as any).metaKey || (e as any).shiftKey || (e as any).altKey) return;
      try {
        console.debug('ProductCard click', { id: product.id, from: location.pathname + location.search, historyLength: window.history.length, href: window.location.href });
      } catch (err) {}
      try {
        // Ensure there's an explicit history entry for the current products page
        // so the browser Back button reliably returns here.
        window.history.pushState({}, '', location.pathname + location.search);
      } catch (err) {
        // ignore
      }
    }}
  >
        <div className="relative aspect-square overflow-hidden rounded-lg bg-accent">
          <img
            src={allImages[imageIndex]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {hasDiscount && (
            <span className="absolute left-2 md:left-3 top-2 md:top-3 rounded-full bg-primary text-primary-foreground text-[10px] md:text-[11px] px-2 py-1 shadow">
              -{discount}%
            </span>
          )}
        </div>
        <div className="mt-2 md:mt-3 px-2 md:px-3">
          <h3 className="text-xs md:text-sm font-medium line-clamp-2">{product.name}</h3>
          <div className="mt-1 md:mt-2 flex items-center gap-1 md:gap-2">
            <span className="text-sm md:text-base font-semibold">₹{product.price.toFixed(0)}</span>
            {hasDiscount && (
              <span className="text-[10px] md:text-xs text-muted-foreground line-through">
                ₹{(product.originalPrice as number).toFixed(0)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="p-2 md:p-3">
        <div className="text-xs text-muted-foreground mb-2 text-center">
          Minimum order: 25 pieces
        </div>
        {currentQty === 0 ? (
          <Button
            className="w-full h-8 md:h-9 text-xs md:text-sm"
            onClick={handleAddToCart}
          >
            Add to Cart (25 pcs)
          </Button>
        ) : (
          <div className="flex items-center justify-between border rounded-md p-1.5 bg-primary/5">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 hover:bg-primary/20 rounded text-sm font-semibold transition"
            >
              −
            </button>
            <span className="text-sm font-bold text-primary">{currentQty}</span>
            <button
              onClick={handleIncrement}
              className="px-2 py-1 hover:bg-primary/20 rounded text-sm font-semibold transition"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
