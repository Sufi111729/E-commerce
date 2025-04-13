import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">QamarCart</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
            <Link to="/products/clothing" className="text-gray-300 hover:text-emerald-400 transition-colors">Clothing</Link>
            <Link to="/products/shoes" className="text-gray-300 hover:text-emerald-400 transition-colors">Shoes</Link>
            <Link to="/products/bags" className="text-gray-300 hover:text-emerald-400 transition-colors">Bags</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-600 bg-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-gray-200 placeholder-gray-400"
              />
            </div>
            
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-300 hover:text-emerald-400 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="btn btn-outline"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                <User className="h-6 w-6" />
                <span className="ml-1">Login</span>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <ShoppingBag className="h-6 w-6 text-gray-300" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 pt-2 pb-4 px-4 shadow-inner border-t border-gray-700">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 py-2">Home</Link>
            <Link to="/products/clothing" className="text-gray-300 hover:text-emerald-400 py-2">Clothing</Link>
            <Link to="/products/shoes" className="text-gray-300 hover:text-emerald-400 py-2">Shoes</Link>
            <Link to="/products/bags" className="text-gray-300 hover:text-emerald-400 py-2">Bags</Link>
            <div className="relative my-2">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-600 bg-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-gray-200 placeholder-gray-400"
              />
            </div>
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="btn btn-outline w-full"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="flex items-center text-gray-300 hover:text-emerald-400 py-2">
                <User className="h-6 w-6 mr-2" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 