import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Bed, Bath, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import properties from '../data/house_details.json';

const propertiesWithIds = properties.map((property, index) => ({
  ...property,
  id: `featured-${index + 1}`,
  beds: property.bed || 'N/A',
  baths: property.bath || 'N/A',
  badge: index % 2 === 0 ? 'Featured' : 'New',
  image: property.images.links[0] || 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
}));

function FeaturedHomes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const propertiesPerPage = 12;
  const totalPages = Math.ceil(propertiesWithIds.length / propertiesPerPage);

  const filteredProperties = propertiesWithIds.filter((property) =>
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Featured Homes
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
            <Input
              placeholder="Search by address..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 rounded-xl shadow-apple bg-white border-gray-300"
              aria-label="Search properties by address"
            />
          </div>
          <Button
            className="bg-primary text-white hover:bg-opacity-90 rounded-xl flex items-center gap-2"
            aria-label="Filter properties"
          >
            <Filter className="h-5 w-5" />
            Filter
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProperties.map((property, index) => (
            <Link key={index} to={`/property/${property.id}`} className="block">
              <Card
                className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 h-full flex flex-col"
              >
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
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <Button
            className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              className={`${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary border-gray-300'
              } hover:bg-opacity-90 rounded-full w-10 h-10`}
              onClick={() => handlePageChange(index + 1)}
              aria-label={`Page ${index + 1}`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            className="bg-primary text-white hover:bg-opacity-90 rounded-full p-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedHomes;