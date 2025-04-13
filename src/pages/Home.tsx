import { useEffect } from 'react';
import { products } from '../data/products';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <Hero />

      <section className="py-16 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Featured Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest fashion pieces for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Shop by Category</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our collections and find the perfect addition to your wardrobe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategorySection
              title="Clothing"
              description="Explore our latest clothing collection"
              image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzaG9lcyUyMGJhZ3MlMjBlY29tbWVyY2V8ZW58MHx8fHwxNzQ0NTIwMTg3fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              link="/products/clothing"
            />
            <CategorySection
              title="Shoes"
              description="Step out in style with our footwear"
              image="https://images.unsplash.com/photo-1512068312404-09a183f541eb?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzaG9lcyUyMGJhZ3MlMjBlY29tbWVyY2V8ZW58MHx8fHwxNzQ0NTIwMTg3fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              link="/products/shoes"
            />
            <CategorySection
              title="Bags"
              description="Complete your look with our premium bags"
              image="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzaG9lcyUyMGJhZ3MlMjBlY29tbWVyY2V8ZW58MHx8fHwxNzQ0NTIwMTg3fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              link="/products/bags"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">About The Designer</h2>
              <p className="text-gray-300 mb-6">
                I'm Muhammad Sufiyan — a Java Full Stack Developer and Fashion Designer. I blend technology with creativity,
                building seamless web experiences while designing stylish, minimalist fashion for men.
              </p>
              <div className="flex space-x-4">
                <button className="btn btn-primary">
                  <a href="https://sufiweb.netlify.app/#portfolio">Learn More</a>
                </button>

                <button className="btn btn-primary">
                  <a href="https://sufiweb.netlify.app/#portfolio">Learn More</a>
                </button>
              </div>

            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/d1092d62-8c78-47a1-4e93-e58440d26400/public"
                alt="Designer profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
