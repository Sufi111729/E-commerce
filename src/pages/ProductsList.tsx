import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductsList = () => {
  const { category } = useParams<{ category: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products;
    
  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : 'All Products';

  return (
    <div className="py-12 bg-gray-900">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-white">{categoryTitle}</h1>
          <p className="text-gray-400">
            {filteredProducts.length} products
          </p>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-400">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
 