import  { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 border-t border-gray-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">QamarCart</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium fashion store for your everyday style needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products/clothing" className="text-gray-400 hover:text-emerald-400 transition-colors">Clothing</Link></li>
              <li><Link to="/products/shoes" className="text-gray-400 hover:text-emerald-400 transition-colors">Shoes</Link></li>
              <li><Link to="/products/bags" className="text-gray-400 hover:text-emerald-400 transition-colors">Bags</Link></li>
              <li><Link to="/products/new" className="text-gray-400 hover:text-emerald-400 transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-emerald-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-emerald-400 transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers and promotions.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-gray-200 px-4 py-2 rounded-l-md w-full focus:outline-none border border-gray-600 placeholder-gray-400" 
                />
                <button type="submit" className="bg-emerald-600 px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} QamarCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 