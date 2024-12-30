import React, { useState } from 'react';
import { useStore } from '../store/store';
import toast from 'react-hot-toast';

export const Contact = () => {
  const { addContactForm } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    jobTitle: '',
    jobDetails: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString()
    };
    addContactForm(newContact);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      jobTitle: '',
      jobDetails: '',
      message: ''
    });
    toast.success('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with AI? Fill out the form below and our team
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
              title='Name'
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
              title='Email Address'
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
              title='Phone Number'
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Name
              </label>
              <input
              title='Company Name'
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Country
              </label>
              <input
              title='Country'
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Job Title
              </label>
              <input
              title='Job Title'
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Job Details
              </label>
              <textarea
              title='Job Details'
                required
                value={formData.jobDetails}
                onChange={(e) => setFormData({ ...formData, jobDetails: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
              title='Message'
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <div className="text-primary text-2xl mb-3">📍</div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Sunderland, UK</p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <div className="text-primary text-2xl mb-3">📞</div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+44 123 456 7890</p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <div className="text-primary text-2xl mb-3">✉️</div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">contact@ai-solutions.com</p>
            <p className="text-gray-600 dark:text-gray-300">info@aisolutions.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2335733365404!2d-1.384359684031359!3d54.90605398040454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6a4e1b4f9c3d%3A0x4d9b6f7c4c4b9c5!2sSunderland%20Software%20City!5e0!3m2!1sen!2suk!4v1632651985737!5m2!1sen!2suk"
            width="100%"
            height="450"
            className="iframe-style"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};