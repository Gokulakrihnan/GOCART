
import { ProductCard } from "./ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  isInWishlist: (productId: number) => boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export const ProductGrid = ({
  products,
  isInWishlist,
  onAddToCart,
  onToggleWishlist,
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInWishlist={isInWishlist(product.id)}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
};
