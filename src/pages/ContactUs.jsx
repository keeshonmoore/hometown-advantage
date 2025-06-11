import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Phone, Mail } from 'lucide-react';

const offices = [
  {
    title: 'Main Office',
    address: '907 S. Orange Avenue, Yuma, Arizona 85364',
    phone: '(928) 329-7275',
  },
  {
    title: 'Branch Office',
    address: '250 W. 24 St, Suite C, Yuma, AZ 85364',
    phone: '(928) 304-7440',
  },
  {
    title: 'Phoenix Satellite Office',
    address: '1815 W 1st Avenue Suite 117, Mesa, AZ 85202',
    phone: '(520) 471-1864',
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-full">
              <div>
                <Label htmlFor="name" className="text-secondary mb-2 block">
                  Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="rounded-xl shadow-apple bg-white border-gray-300"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-primary text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-secondary mb-2 block">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="rounded-xl shadow-apple bg-white border-gray-300"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-primary text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone" className="text-secondary mb-2 block">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="rounded-xl shadow-apple bg-white border-gray-300"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-secondary mb-2 block">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="rounded-xl shadow-apple bg-white border-gray-300 min-h-[120px]"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-primary text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-opacity-90 rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.678346937576!2d-114.62367168478445!3d32.69265198100112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d662f8b7c5b7b7%3A0x1e3c7f8b7c5b7b7!2s907%20S%20Orange%20Ave%2C%20Yuma%2C%20AZ%2085364!5e0!3m2!1sen!2sus!4v1697051234567!5m2!1sen!2sus"
              className="w-full h-96 rounded-xl shadow-apple"
              allowFullScreen=""
              loading="lazy"
              title="Hometown Advantage Main Office Location"
              aria-label="Map showing Hometown Advantage Main Office"
            ></iframe>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-secondary text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-secondary text-center flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:michellesellsyuma@gmail.com"
              className="hover:text-primary transition-colors"
            >
              michellesellsyuma@gmail.com
            </a>
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-secondary text-center mb-8">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 h-full flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-secondary text-center">
                    {office.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 text-center">
                  <p className="text-secondary mb-4">{office.address}</p>
                  <div className="flex items-center justify-center gap-2 text-secondary mb-4">
                    <Phone className="h-5 w-5" />
                    <a
                      href={`tel:${office.phone.replace(/\D/g, '')}`}
                      className="hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;