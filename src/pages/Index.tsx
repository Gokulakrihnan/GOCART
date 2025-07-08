
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { CartSidebar } from "@/components/CartSidebar";
import { WishlistSidebar } from "@/components/WishlistSidebar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { products } from "@/data/products";
import { Category } from "@/types";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Electronics", "Fashion", "Books", "Computers", "Mobiles", "Gadgets"];

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  const {
    wishlistItems,
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const moveToCartFromWishlist = (product) => {
    addToCart(product);
    toggleWishlist(product);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-off-white">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onWishlistToggle={() => setIsWishlistOpen(!isWishlistOpen)}
      />

      <div className="relative">
        <div className="flex gap-8">
          <div className="flex-1">
            <HeroSection />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            {/* Products Section */}
            <div className="container mx-auto px-6 py-16 bg-stone-50">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
                  Featured Products
                </h2>
                <p className="text-stone-600 text-lg">Discover our most popular gear</p>
              </div>
              
              <ProductGrid
                products={filteredProducts}
                isInWishlist={isInWishlist}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
              />
            </div>
          </div>

          <CartSidebar
            isOpen={isCartOpen}
            cartItems={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            getTotalPrice={getTotalPrice}
          />

          <WishlistSidebar
            isOpen={isWishlistOpen}
            wishlistItems={wishlistItems}
            onClose={() => setIsWishlistOpen(false)}
            onMoveToCart={moveToCartFromWishlist}
            onToggleWishlist={toggleWishlist}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
