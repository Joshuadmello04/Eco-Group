import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecoLogo from "@/assets/eco-logo.png";
import { Shield } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={ecoLogo} alt="ECO Group" className="h-10 w-10" />
            <div className="text-xl font-bold">ECO GROUP</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
  <Button
    variant="default"
    size="sm"
    className="bg-accent text-accent-foreground hover:bg-accent/90"
    asChild
  >
    <Link to="/contact">Get Quote</Link>
  </Button>

  {/* ADMIN ICON */}
  <Link
    to="/admin/login"
    title="Admin Login"
    className="p-2 rounded-full hover:bg-secondary transition"
  >
    <Shield size={18} />
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
