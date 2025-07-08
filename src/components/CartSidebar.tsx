
import { Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";

interface CartSidebarProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveFromCart: (productId: number) => void;
  onUpdateQuantity: (productId: number, change: number) => void;
  getTotalPrice: () => number;
}

export const CartSidebar = ({
  isOpen,
  cartItems,
  onClose,
  onRemoveFromCart,
  onUpdateQuantity,
  getTotalPrice,
}: CartSidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="w-80 clean-card p-6 h-fit sticky top-24 border-2 border-fresh-teal/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-navy">Shopping Cart</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-dark-navy hover:text-orange-accent hover:bg-orange-accent/10">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-dark-navy/70 text-center py-12">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-8 max-h-80 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-4 bg-light-purple/20 rounded-lg border border-fresh-teal/30">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-dark-navy truncate">{item.name}</h4>
                  <p className="text-fresh-teal font-semibold text-sm">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="h-6 w-6 p-0 border-fresh-teal text-fresh-teal hover:bg-orange-accent hover:text-pure-white hover:border-orange-accent"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-6 text-center text-dark-navy">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="h-6 w-6 p-0 border-fresh-teal text-fresh-teal hover:bg-orange-accent hover:text-pure-white hover:border-orange-accent"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-dark-navy hover:text-orange-accent hover:bg-orange-accent/10 h-6 w-6 p-0 ml-2"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-fresh-teal/20 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-dark-navy text-lg">Total:</span>
              <span className="font-bold text-xl text-fresh-teal">${getTotalPrice().toFixed(2)}</span>
            </div>
            <Button className="accent-button w-full text-lg py-4 shadow-lg hover:shadow-xl">
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
