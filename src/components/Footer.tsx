import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-intensity border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">AP PHYSIQUES</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Elite physique coaching for people who don't quit. Transform your body with 
              precision programming and accountability that delivers results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/ap_physiques_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary/20 rounded-lg transition-colors group"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-primary" />
              </a>
              <a 
                href="mailto:info@apphysiques.com"
                className="p-3 bg-secondary hover:bg-primary/20 rounded-lg transition-colors group"
              >
                <Mail className="h-5 w-5 text-gray-300 group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Plans", href: "/plans" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                info@apphysiques.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                Available Worldwide
                <br />
                Online Coaching
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AP Physiques. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;