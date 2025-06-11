import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Home, Search, Building, DollarSign } from 'lucide-react';

const services = [
  {
    title: 'Sell Your Property',
    description:
      'When you’re ready to sell a home, you’ll need a trusted partner! It’s our goal for each transaction to be a positive one. Call us today!',
    buttonText: 'Seller Tips',
    icon: Home,
  },
  {
    title: 'Buy Property',
    description:
      'Whether it’s a starter house for first time homebuyers, a luxury home or retirement property, we’ll help you find the perfect place to call home!',
    buttonText: 'Buyer Tips',
    icon: Search,
  },
  {
    title: 'Property Management',
    description:
      'We offer full service Property Management. Whether you are renting or have a home for rent, we’ve got you covered.',
    buttonText: 'Renting Tips',
    icon: Building,
  },
  {
    title: 'Investment Property',
    description:
      'If you’re looking to purchase additional properties for extra income, we can guide you through the process.',
    buttonText: 'Investor Tips',
    icon: DollarSign,
  },
];

function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Full Service Real Estate Solutions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 flex flex-col h-full"
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-secondary text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-secondary text-center">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-full">
                  {service.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;