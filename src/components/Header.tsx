
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartItem, Product } from "@/types";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartItems: CartItem[];
  wishlistItems: Product[];
  onCartToggle: () => void;
  onWishlistToggle: () => void;
}

export const Header = ({
  searchQuery,
  onSearchChange,
  cartItems,
  wishlistItems,
  onCartToggle,
  onWishlistToggle,
}: HeaderProps) => {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="group">
              <h1 className="text-2xl font-semibold text-stone-900 group-hover:text-olive-600 transition-colors duration-200">
                GoCart
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/track-order" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Track Order
              </Link>
              <Link to="/returns" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Returns
              </Link>
              <Link to="/shipping" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Shipping
              </Link>
              <Link to="/help-center" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Help
              </Link>
            </nav>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-stone-300 text-stone-600 hover:bg-stone-50"
            >
              <Link to="/login">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onWishlistToggle}
              className="relative border-stone-300 text-stone-600 hover:bg-stone-50"
            >
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-olive-600 text-white text-xs">
                  {wishlistItems.length}
                </Badge>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onCartToggle}
              className="relative border-stone-300 text-stone-600 hover:bg-stone-50"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-olive-600 text-white text-xs">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
