import  { Link } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategorySection = ({ title, description, image, link }: CategorySectionProps) => {
  return (
    <div className="relative overflow-hidden group rounded-lg border border-gray-700 shadow-lg">
      <div className="h-96">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
 