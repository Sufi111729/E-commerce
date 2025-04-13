import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzaG9lcyUyMGJhZ3MlMjBlY29tbWVyY2V8ZW58MHx8fHwxNzQ0NTIwMTg3fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800" 
          alt="Woman in stylish coat" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Style</h1>
          <p className="text-xl text-gray-300 mb-8">Discover the latest trends in clothing, shoes, and bags. Premium quality that speaks for itself.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products/clothing" className="btn btn-primary flex items-center bg-emerald-600 hover:bg-emerald-700">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/products/new" className="btn btn-outline">
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 