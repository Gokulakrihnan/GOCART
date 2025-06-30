import { useState } from "react";
import { ShoppingCart, Search, Star, Heart, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

type Category = "All" | "Electronics" | "Fashion" | "Books" | "Computers" | "Mobiles" | "Gadgets";

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Electronics", "Fashion", "Books", "Computers", "Mobiles", "Gadgets"];

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "Electronics",
      isSale: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Electronics",
      isNew: true
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Fashion",
      isSale: true
    },
    {
      id: 4,
      name: "Luxury Leather Bag",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 203,
      category: "Fashion"
    },
    {
      id: 5,
      name: "Modern Desk Lamp",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 67,
      category: "Electronics",
      isNew: true
    },
    {
      id: 6,
      name: "Programming Fundamentals",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 312,
      category: "Books"
    },
    {
      id: 7,
      name: "Gaming Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 98,
      category: "Computers",
      isSale: true
    },
    {
      id: 8,
      name: "Smartphone Pro",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 234,
      category: "Mobiles",
      isNew: true
    },
    {
      id: 9,
      name: "Wireless Earbuds",
      price: 159.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 176,
      category: "Gadgets",
      isSale: true
    },
    {
      id: 10,
      name: "Mechanical Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 142,
      category: "Computers"
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const toggleWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        });
        return prev.filter(item => item.id !== product.id);
      } else {
        toast({
          title: "Added to wishlist!",
          description: `${product.name} has been added to your wishlist.`,
        });
        return [...prev, product];
      }
    });
  };

  const moveToCartFromWishlist = (product: Product) => {
    addToCart(product);
    setWishlistItems(prev => prev.filter(item => item.id !== product.id));
  };

  const isInWishlist = (productId: number) => 
    wishlistItems.some(item => item.id === productId);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GoCart
              </h1>
            </div>
            
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                className="relative hover:bg-red-50 hover:border-red-300 transition-all duration-200"
              >
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-600">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-4xl font-bold mb-4">Summer Sale</h2>
              <p className="text-xl mb-6 text-blue-100">Up to 50% off on selected items</p>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Shop by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300"
                    } transition-all duration-200`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                      )}
                      {product.isSale && (
                        <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                        isInWishlist(product.id)
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-white/90 hover:bg-white"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          {isCartOpen && (
            <div className="w-80 bg-white rounded-lg shadow-xl p-6 h-fit sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Shopping Cart</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-gray-600 text-sm">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-6 w-6 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-6 w-6 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 h-6 w-6 p-0 ml-2"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Wishlist Sidebar */}
          {isWishlistOpen && (
            <div className="w-80 bg-white rounded-lg shadow-xl p-6 h-fit sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Wishlist</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsWishlistOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {wishlistItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your wishlist is empty</p>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Button
                          size="sm"
                          onClick={() => moveToCartFromWishlist(item)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs px-2 py-1"
                        >
                          Add to Cart
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleWishlist(item)}
                          className="text-red-500 hover:text-red-700 text-xs px-2 py-1"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GoCart
              </h3>
              <p className="text-gray-400 mb-6">
                GoCart is your trusted one-stop shop for electronics, fashion, books, gadgets, and more — delivering great deals and quality products straight to your door.
              </p>
              <p className="text-gray-400">
                Contact us anytime at support@gocart.com — we're ready to help!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About GoCart</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GoCart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
