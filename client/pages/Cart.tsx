import { Link } from "react-router-dom";
import { useCart } from "@/context/cart";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function currency(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

export default function Cart() {
  const { state, setQty, remove, subtotal, total } = useCart();
  const { toast } = useToast();
  const items = state.items;

  const handleQuantityChange = (id: string, newQty: number) => {
    if (newQty < 25) {
      toast({
        title: "Minimum Order Quantity",
        description: "Quantity cannot be less than 25 pieces per item",
        variant: "destructive"
      });
      setQty(id, 25);
    } else {
      setQty(id, newQty);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="font-serif text-3xl mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed p-8 text-center text-muted-foreground">
          Your cart is empty. <Link to="/products" className="underline">Browse products</Link>.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <div className="w-full">
              <div className="flex text-sm text-muted-foreground mb-4 border-b pb-4">
                <div className="flex-grow">Product</div>
                <div className="w-28 text-right">Price</div>
                <div className="w-20 text-right">Qty</div>
                <div className="w-28 text-right">Subtotal</div>
                <div className="w-24 text-right">Action</div>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="mb-8">
                  <div className="flex items-start">
                    <div className="flex-grow flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <button 
                              className="flex items-center gap-1 text-muted-foreground hover:text-red-500 text-sm mt-1"
                            >
                              <Trash2 size={14} />
                              Remove
                            </button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Remove Item</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to remove "{item.name}" from your cart?
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => remove(item.id)}
                                className="bg-red-500 hover:bg-red-600"
                              >
                                Remove
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    <div className="w-28 text-right font-medium">{currency(item.price)}</div>
                    <div className="w-20 px-4">
                      <input
                        type="number"
                        min={25}
                        value={item.qty}
                        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                        className="w-full h-9 text-center border rounded text-sm"
                      />
                      <div className="text-xs text-muted-foreground mt-1 text-center">
                        Min: 25 pcs
                      </div>
                    </div>
                    <div className="w-28 text-right font-medium">{currency(item.price * item.qty)}</div>
                    <div className="w-24 text-right">
                      <button 
                        onClick={() => remove(item.id)}
                        className="inline-flex items-center px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm"
                        title="Remove from cart"
                      >
                        <Trash2 size={18} className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 ml-24">
                    <div className="text-sm text-muted-foreground mb-2">Custom Message for "{item.name}"</div>
                    <textarea
                      placeholder="Enter your personalized message..."
                      className="w-full max-w-xl h-20 p-3 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                      onChange={(e) => item.customMessage = e.target.value}
                      defaultValue={item.customMessage}
                      maxLength={100}
                    />
                    <div className="text-xs text-muted-foreground mt-1">0/100 characters</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-96 border rounded-xl p-6 flex-shrink-0">
            <h2 className="font-medium text-lg mb-6">Order Summary</h2>
            <div className="flex justify-between text-muted-foreground mb-3">
              <div>Subtotal</div>
              <div className="font-medium text-foreground">{currency(subtotal)}</div>
            </div>
            <div className="flex justify-between text-muted-foreground mb-3">
              <div>Shipping</div>
              <div>TBD</div>
            </div>
            <div className="flex justify-between font-medium text-lg pt-3 border-t">
              <div>Total</div>
              <div>{currency(total)}</div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => {
                  const orderText = items.map((i) => {
                    let text = `${i.name} - Qty: ${i.qty} - Amount: ${currency(i.price * i.qty)}`;
                    if (i.customMessage) {
                      text += `\nCustom Message: ${i.customMessage}`;
                    }
                    return text;
                  }).join("\n\n");
                  const msg = `Hi! I would like to place an order:\n\n${orderText}\n\nTotal: ${currency(total)}`;
                  const whatsapp = `https://wa.me/917292871937?text=${encodeURIComponent(msg)}`;
                  window.open(whatsapp, "_blank");
                }}
                className="w-full h-11 rounded bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Order via WhatsApp
              </button>

              <button
                onClick={() => {
                  const lines = items.map((i) => {
                    let text = `${i.name} - Qty: ${i.qty} - Amount: ${currency(i.price * i.qty)}`;
                    if (i.customMessage) {
                      text += `\nCustom Message: ${i.customMessage}`;
                    }
                    return text;
                  });
                  const bodyText = `Hey i would like to order something:\n\n${lines.join("\n\n")}\n\nTotal: ${currency(total)}`;
                  const subject = "New Order Inquiry";
                  window.location.href = `mailto:Shree.wraps@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
                }}
                className="w-full h-11 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Place order via Email
              </button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground text-center px-4">
              Use WhatsApp for instant confirmation or Email us and we'll follow up.
            </p>

            <Link 
              to="/products" 
              className="mt-4 text-sm text-muted-foreground hover:text-foreground block text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
