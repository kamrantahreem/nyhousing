import { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-emerald-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Have a question? We’re here to help.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 pb-28">

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
          {submitted && (
            <p className="mb-4 text-green-600 font-medium">
              Thank you! Your message has been sent.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in touch</h2>
          <div className="flex items-start gap-4">
            <span className="text-emerald-600 text-xl">📍</span>
            <p>123 Main Street, New York, NY</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-emerald-600 text-xl">📞</span>
            <p>+1 234 567 890</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-emerald-600 text-xl">✉️</span>
            <p>info@homefinder.com</p>
          </div>
          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-md"
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8923602874557!2d-74.00601518459355!3d40.71277577933014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTUuMCJX!5e0!3m2!1sen!2sus!4v1699690182632!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
