import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Bed, Bath, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 'rental-1',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
    badge: 'Available',
    price: '$1,500/mo',
    address: '123 Main St, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
  {
    id: 'rental-2',
    image: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
    badge: 'New',
    price: '$2,200/mo',
    address: '456 Oak Ave, Phoenix, AZ',
    beds: 4,
    baths: 3,
  },
  {
    id: 'rental-3',
    image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
    badge: 'Available',
    price: '$1,200/mo',
    address: '789 Pine Rd, White Mountains, AZ',
    beds: 2,
    baths: 1,
  },
  {
    id: 'rental-4',
    image: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
    badge: 'New',
    price: '$1,800/mo',
    address: '101 Elm St, Yuma, AZ',
    beds: 3,
    baths: 2,
  },
];

function Rentals() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Rentals
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
            <Input
              placeholder="Search by address..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 rounded-xl shadow-apple bg-white border-gray-300"
              aria-label="Search rentals by address"
            />
          </div>
          <Button
            className="bg-primary text-white hover:bg-opacity-90 rounded-xl flex items-center gap-2"
            aria-label="Filter rentals"
          >
            <Filter className="h-5 w-5" />
            Filter
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <Link key={index} to={`/property/${property.id}`} className="block">
              <Card
                className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 h-full flex flex-col"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={`Rental property at ${property.address}`}
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
      </div>
    </section>
  );
}

export default Rentals;