import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Bed, Bath, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 'sold-1',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
    badge: 'Sold',
    price: '$450,000',
    address: '123 Main St, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'sold-2',
    image: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
    badge: 'Recently Sold',
    price: '$625,000',
    address: '456 Oak Ave, Phoenix, AZ',
    beds: 4,
    baths: 3,
  },
  {
    id: 'sold-3',
    image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
    badge: 'Sold',
    price: '$375,000',
    address: '789 Pine Rd, White Mountains, AZ',
    beds: 2,
    baths: 1,
  },
  {
    id: 'sold-4',
    image: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
    badge: 'Recently Sold',
    price: '$550,000',
    address: '101 Elm St, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'sold-5',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    badge: 'Sold',
    price: '$480,000',
    address: '202 Cedar Dr, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'sold-6',
    image: 'https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_1280.jpg',
    badge: 'Recently Sold',
    price: '$650,000',
    address: '303 Maple Way, Phoenix, AZ',
    beds: 4,
    baths: 3,
  },
  {
    id: 'sold-7',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg',
    badge: 'Sold',
    price: '$390,000',
    address: '404 Spruce Ct, White Mountains, AZ',
    beds: 2,
    baths: 1,
  },
  {
    id: 'sold-8',
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181380_1280.jpg',
    badge: 'Recently Sold',
    price: '$520,000',
    address: '505 Willow St, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'sold-9',
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181360_1280.jpg',
    badge: 'Sold',
    price: '$680,000',
    address: '606 Aspen Rd, Phoenix, AZ',
    beds: 5,
    baths: 4,
  },
  {
    id: 'sold-10',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/architecture-1867407_1280.jpg',
    badge: 'Recently Sold',
    price: '$460,000',
    address: '707 Laurel Ave, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'sold-11',
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181370_1280.jpg',
    badge: 'Sold',
    price: '$600,000',
    address: '808 Sycamore Ln, Phoenix, AZ',
    beds: 4,
    baths: 3,
  },
  {
    id: 'sold-12',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/04/16/architecture-1867417_1280.jpg',
    badge: 'Recently Sold',
    price: '$410,000',
    address: '909 Poplar Dr, White Mountains, AZ',
    beds: 2,
    baths: 2,
  },
];

function HomesSold() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const propertiesPerPage = 12;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const filteredProperties = properties.filter((property) =>
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
          Homes Sold
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
            <Input
              placeholder="Search by address..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 rounded-xl shadow-apple bg-white border-gray-300"
              aria-label="Search homes sold by address"
            />
          </div>
          <Button
            className="bg-primary text-white hover:bg-opacity-90 rounded-xl flex items-center gap-2"
            aria-label="Filter homes sold"
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
                    alt={`Sold property at ${property.address}`}
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

export default HomesSold;