import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Phone } from 'lucide-react';

const locations = [
  {
    title: 'Yuma,AZ Main Office',
    address: '907 S. Orange Ave Yuma, AZ 85364',
    phone: '(928) 329-7275',
  },
  {
    title: 'Phoenix, AZ Satellite Office',
    address: '1815 W 1st Avenue Suite 117 Mesa, AZ 85202',
    phone: '(520) 471-1864',
  },
  {
    title: 'White Mountains, AZ',
    address: 'Coming Soon..',
    phone: '...',
  },
];

function Locations() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Our Locations
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary text-center">
                  {location.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4 text-center">
                <p className="text-secondary mb-4">{location.address}</p>
                <div className="flex items-center justify-center gap-2 text-secondary mb-4">
                  <Phone className="h-5 w-5" />
                  <span>{location.phone}</span>
                </div>
                <Button
                  className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-full"
                  asChild
                >
                  <a href={`tel:${location.phone.replace(/\D/g, '')}`} aria-label={`Call ${location.title}`}>
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;