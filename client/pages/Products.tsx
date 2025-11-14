import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "@/components/site/ProductCard";
import { CATEGORIES, listByCategory, searchProducts } from "@/data/catalog";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function Products() {
  const q = useQuery();
  const category = q.get("category") || undefined;
  const term = q.get("search") || "";
  const navigate = useNavigate();

  const list = term
    ? searchProducts(term)
    : listByCategory(category);

  // pagination
  const perPage = 8;
  const pageParam = Number(q.get("page") || "1");
  const totalPages = Math.max(1, Math.ceil(list.length / perPage));
  const currentPage = Math.min(Math.max(1, pageParam), totalPages);
  const startIdx = (currentPage - 1) * perPage;
  const pageItems = list.slice(startIdx, startIdx + perPage);
  const location = useLocation();

  // Only rewrite the page query when the incoming pageParam is invalid (NaN, <1 or > totalPages).
  // Rewriting for valid page numbers can replace a history entry and break the Back button.
  useEffect(() => {
    const isInvalidPage = Number.isNaN(pageParam) || pageParam < 1 || pageParam > totalPages;
    console.debug('Products clamp effect', { pageParam, currentPage, isInvalidPage, locationSearch: location.search, historyLength: window.history.length });
    if (isInvalidPage) {
      const params = new URLSearchParams(location.search);
      params.set("page", String(currentPage));
      // replace: true is appropriate here because we're correcting an invalid URL
      console.debug('Products clamp navigating (replace) to', `${location.pathname}?${params.toString()}`);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageParam, currentPage, location.pathname, location.search, totalPages]);

  // Scroll to top whenever the current page changes (so user lands at top of list)
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      // ignore if window is not available
    }
  }, [currentPage]);

  // Log mount to aid debugging of history entries
  useEffect(() => {
    console.debug('Products mount', { locationSearch: location.search, pageParam, currentPage, historyLength: window.history.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = term
    ? `Search: ${term}`
    : category
      ? CATEGORIES.find((c) => c.key === category)?.label || "Products"
      : "All Products";

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
        <h1 className="font-serif text-2xl md:text-3xl">{title}</h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
        {CATEGORIES.map((c) => (
          <Link
            key={c.key}
            to={`/products?category=${c.key}`}
            className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition ${
              category === c.key
                ? "bg-primary text-primary-foreground"
                : "bg-accent hover:bg-accent/70"
            }`}
          >
            {c.label}
          </Link>
        ))}
        <Link
          to="/products"
          className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition ${
            !category && !term
              ? "bg-primary text-primary-foreground"
              : "bg-accent hover:bg-accent/70"
          }`}
        >
          All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {pageItems.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Pagination controls: only show when more than one page */}
      {list.length > perPage && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Showing {startIdx + 1}–{Math.min(startIdx + perPage, list.length)} of {list.length}</div>
          <nav className="flex items-center gap-2">
            <button
              onClick={() => {
                const p = Math.max(1, currentPage - 1);
                const params = new URLSearchParams(location.search);
                params.set("page", String(p));
                navigate(`${location.pathname}?${params.toString()}`);
              }}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border bg-white disabled:opacity-50"
            >
              Prev
            </button>

            {totalPages <= 7 ? (
              Array.from({ length: totalPages }).map((_, idx) => {
                const p = idx + 1;
                return (
                  <button
                    key={p}
                    onClick={() => {
                      const params = new URLSearchParams(location.search);
                      params.set("page", String(p));
                      navigate(`${location.pathname}?${params.toString()}`);
                    }}
                    aria-current={p === currentPage ? "page" : undefined}
                    className={`px-3 py-1 rounded border ${p === currentPage ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
                  >
                    {p}
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-1 text-sm">Page {currentPage} of {totalPages}</div>
            )}

            <button
              onClick={() => {
                const p = Math.min(totalPages, currentPage + 1);
                const params = new URLSearchParams(location.search);
                params.set("page", String(p));
                navigate(`${location.pathname}?${params.toString()}`);
              }}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border bg-white disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      )}

      {list.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground text-sm md:text-base">
          No products found.
        </p>
      )}
    </div>
  );
}
