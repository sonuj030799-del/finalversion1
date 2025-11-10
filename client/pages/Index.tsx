import Hero from "@/components/site/Hero";
import ProductCard from "@/components/site/ProductCard";
import Testimonials from "@/components/site/Testimonials";
import { CountUp } from "@/components/site/CountUp";
import { topPicks, products } from "@/data/catalog";
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "@/context/cart";
import { Button } from "@/components/ui/button";

function AddRandom() {
  const { add } = useCart();
  return (
    <Button
      variant="outline"
      onClick={() => {
        const p = topPicks[Math.floor(Math.random() * topPicks.length)];
        add(p);
      }}
      className="h-9"
    >
      Add Random Product
    </Button>
  );
}

export default function Index() {
  return (
    <div>
      <Hero />

      {/* Showcase Section */}
      <Showcase />

      {/* Achievements Section */}
      <section className="py-24" style={{ backgroundColor: "#fbf6f3" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20">

            {/* Left - Our Achievement (25%) */}
            <div className="w-full lg:w-[25%] text-center lg:text-left">
              <h2 className="font-great text-[5.5rem] leading-[0.9] text-[#432818]">
                Our <br /> Achievement!
              </h2>
            </div>

            {/* Right - Creating Line + Stats (75%) */}
            <div className="w-full lg:w-[75%]">
              {/* Creating Line */}
              <div className="text-center mb-14">
                <h3 className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight text-[#8e6a3f]">
                  Creating gifting experiences that leave a lasting impression
                </h3>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                
                {/* Card 1 */}
                <div className="rounded-2xl bg-white border border-border px-10 py-10 min-h-[17rem] flex flex-col justify-center text-center transform hover:scale-105 transition-transform duration-300 shadow-sm w-full">
                  <div className="text-4xl md:text-5xl font-serif text-[#b78c52] mb-10">
                    <CountUp end={24987} />
                  </div>
                  <div className="text-lg text-muted-foreground leading-snug font-medium">
                    Gifts Delivered and 100% Retained Clients
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl bg-white border border-border px-10 py-10 min-h-[17rem] flex flex-col justify-center text-center transform hover:scale-105 transition-transform duration-300 shadow-sm w-full">
                  <div className="text-4xl md:text-5xl font-serif text-[#b78c52] mb-10">
                    <CountUp end={124} suffix="+" />
                  </div>
                  <div className="text-lg text-muted-foreground leading-snug font-medium">
                    Corporate Partnerships in Last 5 Years
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl bg-white border border-border px-10 py-10 min-h-[17rem] flex flex-col justify-center text-center transform hover:scale-105 transition-transform duration-300 shadow-sm w-full">
                  <div className="text-4xl md:text-5xl font-serif text-[#b78c52] mb-10">
                    <CountUp end={96} suffix="%" />
                  </div>
                  <div className="text-lg text-muted-foreground leading-snug font-medium">
                    Exceptional Client Satisfaction Rate
                  </div>
                </div>

                {/* Card 4 - Cities */}
                <div className="rounded-2xl bg-white border border-border px-10 py-10 min-h-[17rem] flex flex-col justify-center text-center transform hover:scale-105 transition-transform duration-300 shadow-sm w-full">
                  <div className="flex justify-center items-baseline gap-2 mb-10">
                    <span className="text-4xl md:text-5xl font-serif text-[#b78c52]">
                      <CountUp end={5} />
                    </span>
                    <span className="text-3xl font-serif text-[#b78c52]">+</span>
                  </div>
                  <div className="text-lg text-muted-foreground leading-snug font-medium">
                    Cities Across India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Gift Packs CTA */}
      <section className="container mx-auto py-16">
        <div className="rounded-2xl border border-border bg-accent p-10 md:p-14 text-center shadow-sm">
          <h3 className="font-serif text-2xl md:text-3xl">Gift Packs & Chocolate Boxes</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Planning bulk orders for Gift Packs, Chocolate Boxes, or Festive
            Collections? We create premium packages at scale.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground"
          >
            Start Your Order
          </Link>
        </div>
      </section>
    </div>
  );
}

function Showcase() {
  const shuffled = React.useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, []);
  const picks = shuffled.slice(0, 6);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "clamp(150px, 30vw, 240px) clamp(150px, 30vw, 240px) clamp(120px, 22vw, 180px)",
    gap: "5px",
    gridTemplateAreas: `
      "a b c"
      "a d c"
      "e d f"
    `,
  };

  const areas = ["a", "b", "c", "d", "e", "f"];

  return (
    <section className="container mx-auto py-8 md:py-12">
      <h2 className="font-serif text-xl md:text-3xl text-center px-4">
        Elegant Gifts for Every Celebration
      </h2>
      <p className="text-center text-muted-foreground mt-2 max-w-sm md:max-w-3xl mx-auto px-4 text-sm md:text-base leading-relaxed">
        Explore premium gift hampers thoughtfully curated to suit every
        occasion — with gourmet delights, elegant packaging, and a personal
        touch that makes every gift memorable.
      </p>

      <div className="mt-8" style={gridStyle}>
        {picks.map((p, idx) => (
          <div
            key={p.id}
            style={{ gridArea: areas[idx] }}
            className="relative overflow-hidden bg-gray-100 shadow-sm"
          >
            <Link to={`/product/${p.id}`} className="block w-full h-full">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-4">
                <div
                  className="bg-white/80 px-6 py-2 rounded-sm shadow-md font-serif text-sm md:text-base text-center"
                  style={{ minWidth: 160 }}
                >
                  {p.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
