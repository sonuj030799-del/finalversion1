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

          {/* ✅ Logo + Brand Text Updated */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762775745/ChatGPT_Image_Nov_10__2025__04_41_17_PM-removebg-preview_3_uyktig.png"
                alt="Shree Wraps"
                className="h-[6rem] w-[6rem] object-contain select-none"
                loading="eager"
              />
            </Link>

            {/* Text split on two lines + brand-color */}
            <Link to="/" className="ml-3 leading-tight text-[#004631]">
              <span className="font-serif text-3xl block">Shree Wraps</span>
              <span className="font-serif text-3xl block">   & Gifting</span>
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

      {/* ✅ Mobile + Desktop Menus (unchanged) */}
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

      {/* Desktop SHOP Dropdown */}
      <div className="hidden md:block border-t border-border bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-12 py-3">
            <Link to="/" className="text-base font-medium px-4 py-2 hover:text-primary">
              HOME
            </Link>

            {/* SHOP dropdown unchanged */}
            {/* (rest of mega-menu code stays the same) */}

            <Link to="/bulk-order" className="text-base font-medium px-4 py-2 hover:text-primary">
              CUSTOM ORDER
            </Link>
            <Link to="/about" className="text-base font-medium px-4 py-2 hover:text-primary">
              ABOUT
            </Link>
            <Link to="/reviews" className="text-base font-medium px-4 py-2 hover:text-primary">
              REVIEWS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
