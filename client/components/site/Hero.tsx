import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942823/8_bshkuc.png",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942822/9_fpfboj.png",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942822/10_p44lla.png",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762950728/Shree_Wraps_1_pwrz7s.png", 
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942822/6_ocpbjf.png",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942821/1_er3x6y.jpg",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942821/4_viiswv.png",
  "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762942821/2_metavc.jpg"
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="relative w-full flex items-center justify-center bg-white">
      <div className="w-full mx-auto">
        <div className="relative overflow-hidden" style={{ height: "550px" }} ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((src, i) => (
            <div key={i} className="relative h-full flex-shrink-0 min-w-full">
              <img
                src={src}
                alt={`Hero slide ${i + 1}`}
                className="block h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="text-white max-w-3xl">
          <h1 className="font-serif text-5xl text-center">
            Wrap Every Moment
            <br />
            With Love 
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="px-6 h-11 bg-yellow-400 text-black font-bold hover:bg-yellow-800"
            >
              <Link to="/products">Shop Now</Link>
            </Button>

            <Button
              asChild
              className="px-6 h-11 bg-yellow-400 text-black font-bold hover:bg-yellow-800 border-none"
            >
              <Link to="/bulk-order">Bulk & Custom Orders</Link>
            </Button>
          </div>

        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
    </section>
  );
}
