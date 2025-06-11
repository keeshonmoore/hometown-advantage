import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    name: 'About Us',
    href: '#',
    subItems: [
      { name: 'About Home Advantage', href: '/about-home-advantage' },
      { name: 'About Michelle Claborn', href: '/about-michelle-claborn' },
      { name: 'Our Team', href: '/our-team' },
      { name: 'About Yuma', href: '/about-yuma' },
    ],
  },
  { name: 'Featured Homes', href: '/featured-homes' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'Locations', href: '/locations' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Homes Sold', href: '/homes-sold' },
  { name: 'Contact Us', href: '/contact-us' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <header className="bg-white shadow-apple sticky top-0 z-50">
      <div className="py-4">
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/">
            <img
              src="./logo.png"
              alt="Hometown Advantage Logo"
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex gap-6 items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-secondary hover:text-primary transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.subItems && (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </Link>
                {item.subItems && (
                  <div className="absolute hidden group-hover:block bg-white shadow-apple rounded-xl py-2 top-full w-48 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors pointer-events-auto"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button className="hidden lg:block bg-primary text-white hover:bg-opacity-90 rounded-xl">
            Get Started
          </Button>
          <button
            className="lg:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-6">
          <div className="px-4 sm:px-6 lg:px-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="mb-4">
                <div
                  className="flex items-center justify-between text-secondary hover:text-primary transition-colors py-2 cursor-pointer"
                  onClick={() => {
                    if (item.subItems) {
                      toggleDropdown(index);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdowns[index] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {item.subItems && openDropdowns[index] && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-secondary hover:text-primary transition-colors py-2 text-sm pointer-events-auto"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="w-full bg-primary text-white hover:bg-opacity-90 rounded-xl">
              Get Started
            </Button>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:michellesellsyuma@gmail.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  michellesellsyuma@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:9283297275"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  (928) 329-7275
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/michellesells928/"
                  aria-label="Facebook"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/hometown_advantage_real_estate/"
                  aria-label="Instagram"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;