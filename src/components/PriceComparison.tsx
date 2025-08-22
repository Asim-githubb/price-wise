import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Star, Shield, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PriceOption {
  retailer: string;
  logo: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  shipping: string;
  features: string[];
  isRecommended?: boolean;
}

interface PriceComparisonProps {
  prices: PriceOption[];
}

export function PriceComparison({ prices }: PriceComparisonProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Compare Prices</h2>
        <Badge variant="outline" className="text-green-600 border-green-200">
          {prices.length} retailers found
        </Badge>
      </div>

      <div className="space-y-4">
        {prices.map((option, index) => {
          const discountPercentage = option.originalPrice 
            ? Math.round(((option.originalPrice - option.price) / option.originalPrice) * 100)
            : 0;

          return (
            <div
              key={index}
              className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${
                option.isRecommended 
                  ? 'border-primary bg-primary/5 shadow-sm' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {option.isRecommended && (
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}

              <div className="flex items-start justify-between">
                {/* Retailer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <ImageWithFallback
                      src={option.logo}
                      alt={option.retailer}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{option.retailer}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(option.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {option.rating} ({option.reviewCount.toLocaleString()})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="text-right space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">
                      ${option.price.toFixed(2)}
                    </span>
                    {option.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${option.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {discountPercentage > 0 && (
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      Save {discountPercentage}%
                    </Badge>
                  )}

                  <Button className="w-full mt-2" size="sm">
                    Go to Store
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Truck className="w-4 h-4" />
                  <span>{option.shipping}</span>
                </div>
                
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Price History */}
      <div className="mt-6 p-4 bg-accent/50 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">Price Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Lowest Price (30 days):</span>
            <div className="font-semibold text-green-600">$289.99</div>
          </div>
          <div>
            <span className="text-muted-foreground">Average Price:</span>
            <div className="font-semibold text-foreground">$324.99</div>
          </div>
          <div>
            <span className="text-muted-foreground">Price Trend:</span>
            <div className="font-semibold text-green-600">↓ Declining</div>
          </div>
        </div>
      </div>
    </div>
  );
}