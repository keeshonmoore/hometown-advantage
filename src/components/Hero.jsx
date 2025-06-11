import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, User } from 'lucide-react';

function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
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
        body: JSON.stringify({ email, section: 'consultation' }),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      setEmail('');
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Webhook error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0">
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-gray-300 shadow-apple bg-white/90 text-secondary w-full sm:w-64"
                aria-label="Email for newsletter"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-opacity-90 rounded-xl flex items-center"
                disabled={isSubmitting}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Get a Free Consultation'}
              </Button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-sm text-white text-center mt-2">Request sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-primary text-center mt-2">Please enter a valid email.</p>
            )}
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