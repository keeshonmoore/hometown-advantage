import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, section: 'contact' }),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-sm text-primary text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-primary text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          <div className="lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.0745677774507!2d-114.624159!3d32.7106462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d658aad9ecd24f%3A0xf0bade4adf10f59e!2sHometown%20Advantage%20Real%20Estate!5e0!3m2!1sen!2sus!4v1749598762228!5m2!1sen!2sus"
              className="w-full h-96 rounded-xl shadow-apple"
              allowFullScreen=""
              loading="lazy"
              title="Hometown Advantage Yuma Office Location"
              aria-label="Map showing Hometown Advantage Yuma office"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;