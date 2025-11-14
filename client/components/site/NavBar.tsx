import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Menu, ShoppingCart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart";
import { products as catalogProducts } from "@/data/catalog";

const categories = [
  { name: "Promotional Gifts", path: "/promotional-gifts" },
  { name: "Corporate Gifts", path: "/corporate-gifts" },
  { name: "Festival Gifts", path: "/festival-gifts" },
  { name: "Occasional Gifts", path: "/occasional-gifts" },
  { name: "Charity Gifts", path: "/charity-gifts" },
];

function CartBadge() {
  const { state } = useCart();
  const count = state.items.reduce((s: number, i: any) => s + i.qty, 0);
  if (count === 0) return null;
  return (
    <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center">
      {count}
    </span>
  );
}

export default function NavBar() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopPinned, setShopPinned] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (query) navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    // close menus when route changes
    setShopOpen(false);
    setShopPinned(false);
    setOpen(false);
    setMobileShopOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762775745/ChatGPT_Image_Nov_10__2025__04_41_17_PM-removebg-preview_3_uyktig.png"
                alt="Shree Wraps"
                className="h-[4.40rem] w-auto select-none"
                loading="eager"
              />
            </Link>

            <Link to="/" className="font-serif text-2xl tracking-tight">
              <span className="text-primary">Shree Wraps</span>{" "}
              <br />
            
              <span className="text-primary">& Gifting</span>
            </Link>
          </div>
        </div>

        {/* Search */}
        <form
          onSubmit={onSearch}
          className="hidden md:flex items-center gap-2 max-w-lg flex-1 mx-6"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search premium packaging..."
              className="w-full h-10 pl-9 pr-3 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button type="submit" className="h-10 px-4">
            Search
          </Button>
        </form>

        <nav className="flex items-center gap-2 md:gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex h-9 text-sm"
          >
            <Link to="/bulk-order">Bulk Order</Link>
          </Button>
          <Link to="/checkout" className="relative p-2" aria-label="Cart">
            <ShoppingCart className="h-6 w-6" />
            <CartBadge />
          </Link>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4">
            <Link to="/" className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
              HOME
            </Link>

            <div className="mt-1">
              <button
                className="w-full flex items-center justify-between py-2 text-base font-medium"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
                aria-expanded={mobileShopOpen}
              >
                SHOP
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileShopOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
              </button>

              {mobileShopOpen && (
                <div className="mt-2 space-y-1 pl-2">
                  {categories.map((c) => (
                    <Link
                      key={c.name}
                      to={c.path}
                      className="block py-2 text-sm text-gray-700"
                      onClick={() => {
                        setOpen(false);
                        setMobileShopOpen(false);
                      }}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/bulk-order" className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
              CUSTOM ORDER
            </Link>
            <Link to="/about" className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
              ABOUT
            </Link>
            <Link to="/reviews" className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
              REVIEWS
            </Link>
          </div>
        </div>
      )}

      {/* desktop SHOP dropdown */}
      <div className="hidden md:block border-t border-border bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-12 py-3">
            <Link
              to="/"
              className="text-base font-medium px-4 py-2 hover:text-primary"
            >
              HOME
            </Link>

            <div>
              <button
                onMouseEnter={() => !shopPinned && setShopOpen(true)}
                onMouseLeave={() => !shopPinned && setShopOpen(false)}
                onClick={() => {
                  const next = !shopOpen;
                  setShopOpen(next);
                  setShopPinned(next);
                }}
                className="flex items-center gap-2 text-base font-semibold px-4 py-2"
                aria-expanded={shopOpen}
              >
                SHOP
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    shopOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {/* Mega menu dropdown (columns) */}
              <div
                onMouseEnter={() => !shopPinned && setShopOpen(true)}
                onMouseLeave={() => !shopPinned && setShopOpen(false)}
                className={`${shopOpen ? "block" : "hidden"} absolute inset-x-0 top-full mt-3 z-50 flex justify-center`}
              >
                <div className="w-[98vw] max-w-[1600px] bg-white border border-border rounded-md shadow-lg p-14">
                  <div className="grid grid-cols-5 gap-x-12 items-start">
                    {categories.map((c) => {
                      const path = c.path || "";
                      let catKey = path.replace(/\//g, "");
                      if (path.includes("promotional")) catKey = "promotional-gifts";
                      else if (path.includes("corporate")) catKey = "corporates";
                      else if (path.includes("occasional")) catKey = "occasional-gifts";

                      const subcats = Array.from(
                        new Set(
                          catalogProducts
                            .filter((p) => p.category === catKey)
                            .map((p) => p.subCategory)
                            .filter(Boolean)
                        )
                      ).slice(0, 3);

                      const labelize = (s?: string) =>
                        s ? s.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase()) : "";

                      return (
                        <div key={c.name} className="px-6">
                          <Link to={c.path} className="block text-base tracking-widest uppercase font-semibold text-gray-900 pb-6 border-b border-gray-100">
                            {c.name}
                          </Link>

                          <div className="mt-6 space-y-4">
                            {subcats.map((sc) => (
                              <Link
                                key={String(sc)}
                                to={`${c.path}?sub=${encodeURIComponent(String(sc) || "")}`}
                                onClick={() => {
                                  setShopOpen(false);
                                  setShopPinned(false);
                                }}
                                className="block text-lg tracking-wide uppercase text-gray-600 hover:text-primary transition-colors py-2"
                              >
                                {labelize(String(sc))}
                              </Link>
                            ))}
                          </div>

                          <div className="mt-8">
                            <Link 
                              to={c.path}
                              onClick={() => {
                                setShopOpen(false);
                                setShopPinned(false);
                              }}
                              className="inline-block px-8 py-3 text-base bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/bulk-order"
              className="text-base font-medium px-4 py-2 hover:text-primary"
            >
              CUSTOM ORDER
            </Link>
            <Link
              to="/about"
              className="text-base font-medium px-4 py-2 hover:text-primary"
            >
              ABOUT
            </Link>
            <Link
              to="/reviews"
              className="text-base font-medium px-4 py-2 hover:text-primary"
            >
              REVIEWS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
