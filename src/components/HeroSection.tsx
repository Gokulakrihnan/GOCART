export const HeroSection = () => {
  return (
    <div className="relative">
      {/* ✅ Removed both hero sections */}

      {/* ✅ Kept only the Feature Cards Section */}
      <div className="bg-stone-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
              Top Picks
            </h2>
            <p className="text-stone-600 text-lg">Trusted by Adventurers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="adventure-card p-8 text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-olive-600">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Premium Quality</h3>
              <p className="text-stone-600">Curated selection of top-rated outdoor gear</p>
            </div>

            <div className="adventure-card p-8 text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-olive-600">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Fast Shipping</h3>
              <p className="text-stone-600">Free delivery on orders over $50</p>
            </div>

            <div className="adventure-card p-8 text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-olive-600">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Best Prices</h3>
              <p className="text-stone-600">Unbeatable deals on premium gear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 