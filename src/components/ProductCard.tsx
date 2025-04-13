import  { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover object-center transition duration-300 group-hover:scale-105" 
          />
        </Link>
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={() => addToCart(product)}
            className="bg-emerald-600 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition duration-300 hover:bg-emerald-700"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 text-gray-200 hover:text-emerald-400 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-emerald-400 font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
 