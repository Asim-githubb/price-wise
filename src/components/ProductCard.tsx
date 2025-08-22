import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  onClick?: () => void;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  category,
  onClick
}: ProductCardProps) {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className="bg-white border border-border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary/20 group"
      onClick={onClick}
    >
      {/* Product Image */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-md bg-accent">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          {category}
        </Badge>
        
        <h3 className="line-clamp-2 text-sm text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          size="sm" 
          className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          variant="outline"
        >
          View Deal
        </Button>
      </div>
    </div>
  );
}