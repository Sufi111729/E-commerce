import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const productId = parseInt(id || '0');
  const product = products.find(p => p.id === productId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Product Not Found</h2>
        <p className="mb-6 text-gray-400">Sorry, the product you're looking for does not exist.</p>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary bg-emerald-600 hover:bg-emerald-700"
        >
          Return to Home
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-12 bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-700" 
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-semibold mb-3 text-white">{product.name}</h1>
            <p className="text-2xl font-medium text-emerald-400 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-300 mb-8">
              {product.description}
            </p>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-2 border border-gray-600 bg-gray-800 rounded-l-md text-gray-300"
                  disabled={quantity <= 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="p-2 w-16 text-center border-t border-b border-gray-600 bg-gray-700 text-gray-200"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-2 border border-gray-600 bg-gray-800 rounded-r-md text-gray-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full flex items-center justify-center mb-6 bg-emerald-600 hover:bg-emerald-700"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            
            <div className="border-t border-gray-700 pt-6">
              <div className="mb-4">
                <h3 className="font-medium text-gray-300">Category: <span className="text-emerald-400">{product.category}</span></h3>
              </div>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-white">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
 