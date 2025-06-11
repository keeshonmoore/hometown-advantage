import { Button } from '../components/ui/button';
import { Phone } from 'lucide-react';

function AboutHomeAdvantage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          About Home Advantage
        </h1>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <p className="text-2xl text-secondary text-center">
            Hometown Advantage Real Estate offers full service real estate solutions.
          </p>
          <div className="text-secondary">
            <p className="text-lg mb-4">
              We offer many different real estate solutions, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Buying</li>
              <li>Selling</li>
              <li>Property Management / Rentals</li>
              <li>Investment Properties</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-apple p-6 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Avoid Foreclosure
            </h2>
            <p className="text-secondary mb-4">
              We are Certified Distressed Property Experts. Call for an appointment today!
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary mb-4">
              <Phone className="h-5 w-5" />
              <span>928-329-7275</span>
            </div>
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-xl"
              asChild
            >
              <a href="tel:9283297275">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHomeAdvantage;