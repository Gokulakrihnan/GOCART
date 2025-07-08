
import { useState } from "react";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

export const useWishlist = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

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

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: number) => 
    wishlistItems.some(item => item.id === productId);

  return {
    wishlistItems,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};
