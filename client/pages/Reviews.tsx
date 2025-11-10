import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Hrasheekesh kumar singh",
    text: "Excellent Service and the Packaging of Gifts boxes are looking Very nice",
    rating: 4.5,
  },
  {
    name: "Ayush Jha",
    text: "Absolutely delicious chocolate! Rich, smooth, and flavorful—melts in your mouth. Highly recommend..",
    rating: 5,
  },
  {
    name: "Aman Sharma",
    text: "Really love the product and service, especially their homemade sweets and chocolates—they truly add a star to the galaxy.",
    rating: 4,
  },
  // additional sample reviews
  {
    name: "Priya Patel",
    text: "Fast shipping and the packaging was pristine. The personalised touch made our corporate gifting extra special!",
    rating: 5,
  },
  {
    name: "Rohan Verma",
    text: "Good quality materials and responsive customer support. Will order again for our next event.",
    rating: 4,
  },
  {
    name: "Sneha Gupta",
    text: "Lovely designs and the chocolates were delicious. Kids loved the treat boxes!",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    text: "Affordable and premium-looking packaging. Great value for money.",
    rating: 4,
  },
  {
    name: "Anjali Rao",
    text: "Customisation options were exactly what we needed. The team helped us through the design process.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    text: "Beautiful presentation and prompt delivery. Highly recommended for corporate gifting.",
    rating: 4,
  },
];

function Stars({ n }: { n: number }) {
  const count = Math.max(0, Math.floor(n));
  return (
    <div className="flex items-center gap-1 mt-2 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current text-yellow-400 drop-shadow-md" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="text-sm text-pink-600 uppercase tracking-widest">Reviews</span>
          <h1 className="text-4xl md:text-6xl font-great mt-3">What our customers say</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Real reviews from customers who ordered gifts and custom packaging from Shree Wraps.
          </p>
        </div>
        <div>
          <Link to="/" className="text-sm text-primary underline">
            Back to shop
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-lg border border-border p-6 bg-white">
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">“{t.text}”</p>
            <Stars n={t.rating} />
          </div>
        ))}
      </div>
    </section>
  );
}
