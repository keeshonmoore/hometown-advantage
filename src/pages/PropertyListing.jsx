import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Bed, Bath, ChevronLeft, ChevronRight } from 'lucide-react';
import featuredProperties from '../data/house_details.json';
import soldProperties from '../data/sold.json';
import rentalProperties from '../data/rent.json';

function PropertyListing() {
  const { id } = useParams();

  // Find property in featured, sold, or rental JSON
  let property = featuredProperties.find((p, index) => `featured-${index + 1}` === id);
  let source = 'featured';
  if (!property) {
    property = soldProperties.find((p, index) => `sold-${index + 1}` === id);
    source = 'sold';
  }
  if (!property) {
    property = rentalProperties.find((p, index) => `rental-${index + 1}` === id);
    source = 'rental';
  }

  const [mainImage, setMainImage] = useState(property?.images.links[0] || '');
  const [currentGalleryPage, setCurrentGalleryPage] = useState(1);
  const imagesPerPage = 20;
  const totalGalleryPages = Math.ceil((property?.images.links.length || 0) / imagesPerPage);

  const indexOfLastImage = currentGalleryPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = (property?.images.links || []).slice(indexOfFirstImage, indexOfLastImage);

  const handleGalleryPageChange = (page) => {
    setCurrentGalleryPage(page);
  };

  if (!property) {
    return (
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-secondary mb-12">Property Not Found</h1>
          <p className="text-lg text-secondary">Sorry, the property you’re looking for doesn’t exist.</p>
        </div>
      </section>
    );
  }

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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {currentImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${indexOfFirstImage + index + 1} of property at ${property.address}`}
                  className="w-full h-24 object-cover rounded-xl cursor-pointer hover:shadow-apple"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Button
                className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
                onClick={() => handleGalleryPageChange(currentGalleryPage - 1)}
                disabled={currentGalleryPage === 1}
                aria-label="Previous gallery page"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              {[...Array(totalGalleryPages)].map((_, index) => (
                <Button
                  key={index}
                  className={`${
                    currentGalleryPage === index + 1
                      ? 'bg-primary text-white'
                      : 'bg-white text-secondary border-gray-300'
                  } hover:bg-opacity-90 rounded-full w-10 h-10`}
                  onClick={() => handleGalleryPageChange(index + 1)}
                  aria-label={`Gallery page ${index + 1}`}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
                onClick={() => handleGalleryPageChange(currentGalleryPage + 1)}
                disabled={currentGalleryPage === totalGalleryPages}
                aria-label="Next gallery page"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            <p className="text-3xl font-bold text-secondary">{property.price}</p>
            <p className="text-lg text-secondary">{property.address}</p>
            <div className="flex items-center gap-4 text-secondary">
              <div className="flex items-center gap-1">
                <Bed className="h-5 w-5" />
                <span>{property.bed || 'N/A'} bd</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-5 w-5" />
                <span>{property.bath || 'N/A'} ba</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-secondary">{property.title || 'Property'}</h2>
            <p className="text-base text-secondary">{property.description || 'No description available.'}</p>
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-fit"
              asChild
            >
              <a href="tel:9283297275" aria-label={source === 'sold' ? 'Contact for details' : 'Schedule a showing'}>
                {source === 'sold' ? 'Contact for Details' : 'Schedule a Showing'}
              </a>
            </Button>
            <p className="text-sm text-secondary">
              {source === 'sold' ? 'This property has been sold.' : source === 'rental' ? 'This property is available for rent.' : 'This property is available for purchase.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;