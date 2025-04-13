import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-6" />
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products" className="btn btn-primary bg-emerald-600 hover:bg-emerald-700">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-900">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8 text-white">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-white">
                    Cart Items ({items.reduce((acc, item) => acc + item.quantity, 0)})
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <ul>
                {items.map(item => (
                  <li key={item.product.id} className="border-b border-gray-700 last:border-0">
                    <div className="p-6 flex flex-col sm:flex-row gap-4">
                      <div className="sm:w-20 sm:h-20 flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded" 
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link 
                          to={`/product/${item.product.id}`}
                          className="font-medium text-gray-200 hover:text-emerald-400 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-gray-400 text-sm">
                          Category: {item.product.category}
                        </p>
                        <p className="text-emerald-400 font-medium mt-1">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center border border-gray-600 rounded bg-gray-700">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 px-2 text-gray-300"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <span className="px-2 text-gray-200">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 px-2 text-gray-300"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sticky top-20 border border-gray-700">
              <h2 className="text-lg font-semibold mb-6 text-white">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-gray-200">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Shipping</span>
                  <span className="text-gray-200">Free</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between font-semibold">
                  <span className="text-white">Total</span>
                  <span className="text-emerald-400">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-full bg-emerald-600 hover:bg-emerald-700">
                Proceed to Checkout
              </button>
              
              <Link to="/products" className="text-center block mt-4 text-gray-400 hover:text-emerald-400 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
 