import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, User } from 'lucide-react';

function Hero() {
  return (
    <section
      className="bg-[url('./hero.avif')] bg-cover bg-center pt-16 pb-0 px-4 sm:px-6 lg:px-8 relative flex flex-col"
      style={{ backgroundImage: `url('./hero.avif')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center flex-grow px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your <span className="text-white">Dream Home</span> with{' '}
              <span className="text-primary">Hometown Advantage</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0">
              <Input
                placeholder="Enter your email"
                className="rounded-xl border-gray-300 shadow-apple bg-white/90 text-secondary w-full sm:w-64"
                aria-label="Email for newsletter"
              />
              <Button className="bg-primary text-white hover:bg-opacity-90 rounded-xl flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Free Consultation
              </Button>
            </div>
          </div>
          <div className="lg:w-2/5 relative flex flex-col justify-end max-w-sm">
            <img
              src="./cutout.png"
              alt="Real estate agent"
              className="rounded-xl shadow-apple w-full object-contain"
            />
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-xl absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center"
              aria-label="Meet our agent"
            >
              <User className="h-5 w-5 mr-2" />
              Meet Our Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;