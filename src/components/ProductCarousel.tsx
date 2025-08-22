import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (productId: string) => void;
}

export function ProductCarousel({ title, products, onProductClick }: ProductCarouselProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">{title}</h2>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/4 lg:basis-1/5">
                <ProductCard
                  {...product}
                  onClick={() => onProductClick(product.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
}