import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-accent/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <Badge className="bg-primary text-primary-foreground px-3 py-1">
              Featured Deal
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Find the Best Deals
              <span className="block text-primary">Save More Money</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Compare prices from hundreds of retailers and find the best deals on your favorite products. 
              Never overpay again with PriceWise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Start Comparing
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Retailers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">$2.5M</div>
                <div className="text-sm text-muted-foreground">Saved</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592647416962-838a003e9859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBhdWRpb3xlbnwxfHx8fDE3NTU4Mzc0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured Deal - Premium Smartphone"
                className="w-full h-full object-cover"
              />
              
              {/* Price Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting at</p>
                    <p className="text-2xl font-bold text-foreground">$299</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    Up to 40% off
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
              <div className="text-sm text-muted-foreground">Best Price</div>
              <div className="text-lg font-bold text-green-600">$299.99</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}