import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">
              <span className="text-lg font-semibold">PriceWise</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Electronics
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Fashion
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sports
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2 ml-4">
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}