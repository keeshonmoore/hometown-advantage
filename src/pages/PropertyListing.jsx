import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Bed, Bath } from 'lucide-react';

const property = {
  id: '1',
  price: '$328,900',
  address: '6186 E. Overlook Lane Yuma, AZ',
  bedrooms: 3,
  bathrooms: 2,
  title: 'Spectacular Solar Home',
  description:
    'Spectacular Solar Home in gated community. 3 bedroom with lots of improvements. New brick walkway and patio leads you to this open Floor plan, tile throughout. ADT remote alarm system and remote front door lock. New garage door opener. And wait till you see the newly done tiled rolling shower in master bath and laminate flooring. This home is clean as a whistle! Don\'t wait, schedule your showing today!',
  images: [
    'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
  ],
};

function PropertyListing() {
  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Property Details
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={mainImage}
              alt={`Main view of property at ${property.address}`}
              className="w-full h-96 object-cover rounded-xl shadow-apple mb-4"
            />
            <div className="flex gap-4">
              {property.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1} of property at ${property.address}`}
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer hover:shadow-apple"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            <p className="text-3xl font-bold text-secondary">{property.price}</p>
            <p className="text-lg text-secondary">{property.address}</p>
            <div className="flex items-center gap-4 text-secondary">
              <div className="flex items-center gap-1">
                <Bed className="h-5 w-5" />
                <span>{property.bedrooms} bd</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-5 w-5" />
                <span>{property.bathrooms} ba</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-secondary">{property.title}</h2>
            <p className="text-base text-secondary">{property.description}</p>
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-fit"
              asChild
            >
              <a href="tel:9283297275" aria-label="Schedule a showing">
                Schedule a Showing
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;