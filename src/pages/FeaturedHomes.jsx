import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Bed, Bath, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  { id: 'featured-1', image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg', badge: 'Featured', price: '$450,000', address: '123 Main St, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-2', image: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg', badge: 'New', price: '$625,000', address: '456 Oak Ave, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-3', image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg', badge: 'Featured', price: '$375,000', address: '789 Pine Rd, White Mountains, AZ', beds: 2, baths: 2 },
  { id: 'featured-4', image: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg', badge: 'New', price: '$550,000', address: '101 Elm St, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-5', image: 'https://cdn.pixabay.com/photo/2014/11/10/04/08/suburb-525116_1280.jpg', badge: 'Featured', price: '$700,000', address: '202 Birch Ln, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-6', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', badge: 'New', price: '$480,000', address: '303 Cedar Dr, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-7', image: 'https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_1280.jpg', badge: 'Featured', price: '$650,000', address: '404 Maple Way, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-8', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg', badge: 'New', price: '$390,000', address: '505 Spruce Ct, White Mountains, AZ', beds: 2, baths: 1 },
  { id: 'featured-9', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181380_1280.jpg', badge: 'Featured', price: '$520,000', address: '606 Willow St, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-10', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181360_1280.jpg', badge: 'New', price: '$680,000', address: '707 Aspen Rd, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-11', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/architecture-1867407_1280.jpg', badge: 'Featured', price: '$460,000', address: '808 Laurel Ave, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-12', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181370_1280.jpg', badge: 'New', price: '$600,000', address: '909 Sycamore Ln, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-13', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/16/architecture-1867417_1280.jpg', badge: 'Featured', price: '$410,000', address: '111 Poplar Dr, White Mountains, AZ', beds: 2, baths: 2 },
  { id: 'featured-14', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/09/chairs-2181365_1280.jpg', badge: 'New', price: '$530,000', address: '222 Magnolia St, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-15', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/16/architecture-1867427_1280.jpg', badge: 'Featured', price: '$720,000', address: '333 Chestnut Way, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-16', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/08/chairs-2181368_1280.jpg', badge: 'New', price: '$470,000', address: '444 Birch Ct, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-17', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/15/architecture-1867437_1280.jpg', badge: 'Featured', price: '$640,000', address: '555 Elm Rd, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-18', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/07/chairs-2181375_1280.jpg', badge: 'New', price: '$380,000', address: '666 Pine St, White Mountains, AZ', beds: 2, baths: 1 },
  { id: 'featured-19', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/14/architecture-1867447_1280.jpg', badge: 'Featured', price: '$510,000', address: '777 Oak Dr, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-20', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/05/chairs-2181385_1280.jpg', badge: 'New', price: '$690,000', address: '888 Maple Ln, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-21', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/13/architecture-1867457_1280.jpg', badge: 'Featured', price: '$450,000', address: '999 Cedar Ave, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-22', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/04/chairs-2181395_1280.jpg', badge: 'New', price: '$610,000', address: '121 Willow Way, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-23', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/12/architecture-1867467_1280.jpg', badge: 'Featured', price: '$400,000', address: '232 Spruce Rd, White Mountains, AZ', beds: 2, baths: 2 },
  { id: 'featured-24', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/03/chairs-2181405_1280.jpg', badge: 'New', price: '$540,000', address: '343 Laurel St, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-25', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/11/architecture-1867477_1280.jpg', badge: 'Featured', price: '$730,000', address: '454 Aspen Ct, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-26', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/chairs-2181415_1280.jpg', badge: 'New', price: '$490,000', address: '565 Poplar Ln, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-27', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/10/architecture-1867487_1280.jpg', badge: 'Featured', price: '$660,000', address: '676 Magnolia Dr, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-28', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/01/chairs-2181425_1280.jpg', badge: 'New', price: '$370,000', address: '787 Chestnut St, White Mountains, AZ', beds: 2, baths: 1 },
  { id: 'featured-29', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/09/architecture-1867497_1280.jpg', badge: 'Featured', price: '$500,000', address: '898 Birch Way, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-30', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/00/chairs-2181435_1280.jpg', badge: 'New', price: '$670,000', address: '909 Elm Ct, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-31', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/08/architecture-1867507_1280.jpg', badge: 'Featured', price: '$440,000', address: '101 Oak Rd, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-32', image: 'https://cdn.pixabay.com/photo/2017/03/27/14/37/house-2179324_1280.jpg', badge: 'New', price: '$620,000', address: '212 Maple St, Phoenix, AZ', beds: 4, baths: 3 },
  { id: 'featured-33', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/07/architecture-1867517_1280.jpg', badge: 'Featured', price: '$390,000', address: '323 Pine Ln, White Mountains, AZ', beds: 2, baths: 2 },
  { id: 'featured-34', image: 'https://cdn.pixabay.com/photo/2017/03/27/14/35/house-2179322_1280.jpg', badge: 'New', price: '$560,000', address: '434 Cedar Way, Yuma, AZ', beds: 3, baths: 2 },
  { id: 'featured-35', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/06/architecture-1867527_1280.jpg', badge: 'Featured', price: '$740,000', address: '545 Aspen Dr, Phoenix, AZ', beds: 5, baths: 4 },
  { id: 'featured-36', image: 'https://cdn.pixabay.com/photo/2017/03/27/14/34/house-2179320_1280.jpg', badge: 'New', price: '$480,000', address: '656 Poplar Ct, Yuma, AZ', beds: 3, baths: 2 },
];

function FeaturedHomes() {
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