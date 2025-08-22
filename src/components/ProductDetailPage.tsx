import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { PriceComparison } from "./PriceComparison";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Heart, Share2, Star } from "lucide-react";

interface ProductDetailPageProps {
  onBack: () => void;
}

export function ProductDetailPage({ onBack }: ProductDetailPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock product data
  const product = {
    id: "1",
    name: "iPhone 15 Pro Max - 256GB",
    category: "Smartphones",
    images: [
      "https://images.unsplash.com/photo-1592647416962-838a003e9859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU1ODgzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1592647416962-838a003e9859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU1ODgzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1592647416962-838a003e9859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU1ODgzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.8,
    reviewCount: 2847,
    description: "Experience the ultimate iPhone with the Pro Max. Featuring the revolutionary A17 Pro chip, titanium design, and the most advanced camera system ever in an iPhone. Professional-grade photography and videography capabilities with Action button for quick access to your favorite features.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A17 Pro chip with 6-core GPU",
      "Pro camera system with 48MP main",
      "Up to 29 hours video playback",
      "Titanium design with Ceramic Shield",
      "USB-C connectivity"
    ],
    specifications: {
      "Display": "6.7-inch OLED, 2796 x 1290 pixels",
      "Chip": "A17 Pro",
      "Storage": "256GB",
      "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      "Battery": "Up to 29 hours video playback",
      "Weight": "221 grams"
    }
  };

  const priceOptions = [
    {
      retailer: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
      price: 999.99,
      originalPrice: 1199.99,
      rating: 4.7,
      reviewCount: 15420,
      shipping: "Free 2-day shipping",
      features: ["Prime eligible", "Amazon warranty"],
      isRecommended: true
    },
    {
      retailer: "Apple Store",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
      price: 1199.99,
      rating: 4.9,
      reviewCount: 8945,
      shipping: "Free shipping",
      features: ["Official warranty", "Trade-in available"]
    },
    {
      retailer: "Best Buy",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
      price: 1049.99,
      originalPrice: 1199.99,
      rating: 4.6,
      reviewCount: 3241,
      shipping: "Free store pickup",
      features: ["Geek Squad support", "Price match guarantee"]
    },
    {
      retailer: "Walmart",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
      price: 1079.99,
      rating: 4.5,
      reviewCount: 1823,
      shipping: "Free 3-day shipping",
      features: ["Walmart+", "Easy returns"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg border border-border overflow-hidden">
              <ImageWithFallback
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-md border-2 overflow-hidden transition-all ${
                    selectedImageIndex === index
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Price Comparison Section */}
        <PriceComparison prices={priceOptions} />
      </div>
    </div>
  );
}