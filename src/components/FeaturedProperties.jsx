import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Bed, Bath, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import propertiesData from '../data/house_details.json';

const properties = propertiesData.slice(0, 8).map((property, index) => ({
  ...property,
  id: `featured-${index + 1}`,
  beds: property.bed || 'N/A',
  baths: property.bath || 'N/A',
  badge: index % 2 === 0 ? 'Featured' : 'New',
  image: property.images.links[0] || 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
}));

function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Featured Properties
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <Link to={`/property/${property.id}`} className="block">
                    <Card className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 h-full flex flex-col">
                      <div className="relative">
                        <img
                          src={property.image}
                          alt={`Property at ${property.address}`}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <span className="absolute top-2 right-2 bg-primary text-white text-sm font-semibold px-2 py-1 rounded-md">
                          {property.badge}
                        </span>
                      </div>
                      <CardContent className="flex-grow p-4">
                        <p className="text-2xl font-bold text-secondary mb-2">
                          {property.price}
                        </p>
                        <p className="text-secondary mb-2">{property.address}</p>
                        <div className="flex items-center gap-4 text-secondary">
                          <div className="flex items-center gap-1">
                            <Bed className="h-5 w-5" />
                            <span>{property.beds} Bed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="h-5 w-5" />
                            <span>{property.baths} Bath</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;