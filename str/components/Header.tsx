import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Bike, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Головна", href: "/" },
    { label: "Велосипеди", href: "/bikes" },
    { label: "Як це працює", href: "/#how-it-works" },
    { label: "Локації", href: "/locations" },
    { label: "Відгуки", href: "/reviews" },
    { label: "Мої замовлення", href: "/orders" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Bike className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl text-foreground">ВелоДрайв</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`transition-colors font-medium ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span>+380 50 123 4567</span>
            </div>
            <Link to="/bikes">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Орендувати
              </Button>
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Bike className="h-6 w-6 text-primary mr-2" />
                    <span className="font-bold text-lg">ВелоДрайв</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg block py-2 transition-colors ${
                            isActive(item.href)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+380 50 123 4567</span>
                    </div>
                    <Link to="/bikes" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Орендувати
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
