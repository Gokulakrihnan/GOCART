
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

interface WishlistSidebarProps {
  isOpen: boolean;
  wishlistItems: Product[];
  onClose: () => void;
  onMoveToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export const WishlistSidebar = ({
  isOpen,
  wishlistItems,
  onClose,
  onMoveToCart,
  onToggleWishlist,
}: WishlistSidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="w-80 fresh-card p-8 h-fit sticky top-24 border-2 border-orange-accent/30">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-display font-bold text-dark-navy">Wishlist</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-dark-navy hover:text-orange-accent hover:bg-orange-accent/10 rounded-xl">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-light-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">💖</span>
          </div>
          <p className="text-orange-accent text-lg font-medium">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="space-y-6 max-h-96 overflow-y-auto">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-6 bg-light-purple/20 rounded-2xl border border-orange-accent/20 backdrop-blur-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-xl"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-dark-navy truncate mb-1">{item.name}</h4>
                <p className="text-fresh-teal font-bold text-lg">${item.price}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  size="sm"
                  onClick={() => onMoveToCart(item)}
                  className="fresh-button text-sm px-4 py-2 font-bold"
                >
                  Add to Cart
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onToggleWishlist(item)}
                  className="text-orange-accent hover:text-fresh-teal hover:bg-fresh-teal/10 text-sm px-4 py-2 font-medium rounded-xl"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
