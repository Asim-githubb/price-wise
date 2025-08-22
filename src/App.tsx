import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductCarousel } from "./components/ProductCarousel";
import { ProductCard } from "./components/ProductCard";
import { NewsletterSubscription } from "./components/NewsletterSubscription";
import { Footer } from "./components/Footer";
import { ProductDetailPage } from "./components/ProductDetailPage";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "product">("home");

  // Mock product data
  const featuredDeals = [
    {
      id: "1",
      name: "iPhone 15 Pro Max - 256GB",
      image: "https://images.unsplash.com/photo-1592647416962-838a003e9859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU1ODgzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 999.99,
      originalPrice: 1199.99,
      rating: 4.8,
      reviewCount: 2847,
      category: "Smartphones"
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Headphones",
      image: "https://images.unsplash.com/photo-1632200004922-bc18602c79fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBhdWRpb3xlbnwxfHx8fDE3NTU4Mzc0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 329.99,
      originalPrice: 399.99,
      rating: 4.7,
      reviewCount: 1523,
      category: "Audio"
    },
    {
      id: "3", 
      name: "MacBook Pro 14-inch M3",
      image: "https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1ODU5NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 1899.99,
      originalPrice: 1999.99,
      rating: 4.9,
      reviewCount: 892,
      category: "Laptops"
    },
    {
      id: "4",
      name: "Canon EOS R6 Mark II",
      image: "https://images.unsplash.com/photo-1625816615218-a026e9543bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2FtZXJhJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1ODg0NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 2299.99,
      rating: 4.8,
      reviewCount: 234,
      category: "Cameras"
    },
    {
      id: "5",
      name: "PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1655976796204-308e6f3deaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NTU4NTcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 499.99,
      rating: 4.6,
      reviewCount: 3456,
      category: "Gaming"
    },
    {
      id: "6",
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1716234479503-c460b87bdf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzU1Nzk3ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 399.99,
      originalPrice: 429.99,
      rating: 4.7,
      reviewCount: 1876,
      category: "Wearables"
    }
  ];

  const electronics = featuredDeals.slice(0, 4);
  const topDeals = [...featuredDeals].sort((a, b) => {
    const aDiscount = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
    const bDiscount = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
    return bDiscount - aDiscount;
  });

  const handleProductClick = (productId: string) => {
    setCurrentView("product");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  if (currentView === "product") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ProductDetailPage onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Product Carousels */}
      <ProductCarousel
        title="Today's Top Deals"
        products={topDeals}
        onProductClick={handleProductClick}
      />
      
      <ProductCarousel
        title="Featured Electronics"
        products={electronics}
        onProductClick={handleProductClick}
      />
      
      {/* Product Grid */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Popular Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredDeals.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <NewsletterSubscription />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}