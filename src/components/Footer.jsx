import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutLinks = [
  { name: 'About Home Advantage', href: '/about-home-advantage' },
  { name: 'About Michelle Claborn', href: '/about-michelle-claborn' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'About Yuma', href: '/about-yuma' },
];

const homeLinks = [
  { name: 'Featured Homes', href: '/featured-homes' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'Homes Sold', href: '/homes-sold' },
];

const contactLinks = [
  { name: 'Locations', href: '/locations' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact-us' },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, section: 'newsletter' }),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      setIsSubmitted(true);
      setEmail('');
      setSubmitStatus('success');
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Webhook error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/">
            <img
              src="./logo.png"
              alt="Hometown Advantage Logo"
              className="h-10 w-auto mb-4"
            />
          </Link>
          <p className="text-base">
            907 S. Orange Avenue, Yuma, Arizona 85364
            <br />
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:9283297275"
                className="hover:text-primary transition-colors"
              >
                (928) 329-7275
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:michellesellsyuma@gmail.com"
                className="hover:text-primary transition-colors"
              >
                michellesellsyuma@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">About</h3>
          {aboutLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-base hover:text-primary transition-colors transform hover:scale-105 inline-block"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Homes</h3>
          {homeLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-base hover:text-primary transition-colors transform hover:scale-105 inline-block"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          {contactLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-base hover:text-primary transition-colors transform hover:scale-105 inline-block"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          {isSubmitted ? (
            <p className="text-sm text-primary">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl shadow-apple bg-white text-secondary"
                aria-label="Newsletter subscription"
                disabled={isSubmitting}
              />
              <Button
                className="bg-primary text-white hover:bg-opacity-90 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
              {submitStatus === 'error' && (
                <p className="text-sm text-primary text-center">Please enter a valid email.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;