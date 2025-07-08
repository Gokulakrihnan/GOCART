
import { Button } from "@/components/ui/button";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="mb-16 py-16 gradient-teal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-display font-black text-5xl md:text-6xl text-pure-white mb-4 tracking-tight">
            Shop by
          </h3>
          <span className="script-text text-4xl md:text-5xl font-script font-bold text-orange-accent">
            Category
          </span>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 border-2 ${
                selectedCategory === category
                  ? "bg-orange-accent text-pure-white hover:bg-fresh-teal hover:text-pure-white shadow-lg border-orange-accent"
                  : "border-pure-white bg-pure-white/20 text-pure-white hover:bg-orange-accent hover:text-pure-white hover:border-orange-accent backdrop-blur-sm"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
