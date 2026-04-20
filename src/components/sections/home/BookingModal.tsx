import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    setSubmitError('');
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.guests) newErrors.guests = 'Number of guests is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key';

      // Mock successful email send if environment variables are not yet configured
      if (serviceId === 'default_service') {
        console.warn("EmailJS environment variables not set. Mocking email send.");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_name: 'Spice Darbar',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            guests: formData.guests,
            date: formData.date || 'Not specified',
            time: formData.time || 'Not specified',
            message: formData.specialRequests || 'None'
          },
          publicKey
        );
      }

      onSuccess();
      onClose();
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: '',
        specialRequests: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send reservation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book a Table">
      <form onSubmit={handleSubmit} className="space-y-4">
        {submitError && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded-md text-sm">
            {submitError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-bg-base border ${errors.name ? 'border-red-500' : 'border-gold-muted/30'} rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-bg-base border ${errors.email ? 'border-red-500' : 'border-gold-muted/30'} rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full bg-bg-base border ${errors.phone ? 'border-red-500' : 'border-gold-muted/30'} rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="guests">Number of Guests *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-bg-base border border-gold-muted/30 rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
              <option value="10+">10+ Guests</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-bg-base border border-gold-muted/30 rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gold-muted font-sans" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-bg-base border border-gold-muted/30 rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gold-muted font-sans" htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="w-full bg-bg-base border border-gold-muted/30 rounded px-3 py-2 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Any allergies, special occasions, or seating preferences?"
          />
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending Request...' : 'Request Reservation'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
