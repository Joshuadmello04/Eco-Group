import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import ecoLogo from "@/assets/eco-logo.png";

const Footer = () => {
  return (
    <>
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={ecoLogo} alt="ECO Group" className="h-8 w-8" />
              <h3 className="text-xl font-bold">ECO GROUP</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Powering India's Energy Infrastructure Since 1991
            </p>
            <p className="text-xs opacity-75">
              Leading provider of MRO services for turbines and power plant equipment across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/clients" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">Clients</Link></li>
              <li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Kolkata Office */}
          <div>
            <h4 className="font-semibold mb-4">Eastern Sector</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="opacity-90">
                  400/B/1T, N.S.C. Bose Road, G-02 (B/25), L.N. Colony, Kolkata – 700047
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p className="opacity-90">033 - 24305257 / 09903986171</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:eps@ecopowerservices.in" className="opacity-90 hover:text-accent transition-colors">
                  eps@ecopowerservices.in
                </a>
              </div>
            </div>
          </div>

          {/* Faridabad Office */}
          <div>
            <h4 className="font-semibold mb-4">Rest of India</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="opacity-90">
                  I - 7, DLF Industrial Area, Phase-1, Faridabad – 121003
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p className="opacity-90">0129 - 4018639, 9717294105</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:eps@ecopowerservices.in" className="opacity-90 hover:text-accent transition-colors">
                  eps@ecopowerservices.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} ECO Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
