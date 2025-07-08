import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  isInWishlist: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard = ({
  product,
  isInWishlist,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border border-gray-200 shadow-sm hover:shadow-md flex flex-col justify-between">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-black text-white font-medium">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-black text-white font-medium">Sale</Badge>
          )}
        </div>

        <Button
          size="sm"
          variant="outline"
          onClick={() => onToggleWishlist(product)}
          className={`absolute top-3 right-3 rounded-full p-2 border-gray-400 ${
            isInWishlist
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(product.rating)
                  ? "fill-black text-black"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-md">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-black">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <Badge className="bg-gray-100 text-gray-800 border border-gray-200 text-xs mb-4">
          {product.category}
        </Badge>

        <div className="mt-auto">
          <Button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white rounded-full py-2 hover:bg-white hover:text-black border border-black transition"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
