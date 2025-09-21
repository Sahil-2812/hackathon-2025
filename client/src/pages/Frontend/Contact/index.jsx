import React from "react";
import { FaGlobe, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* 🔹 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate with Donation Hub?  
            We’d love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 🔹 Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 🔹 Contact Info */}
          <div className="flex flex-col justify-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-6 text-gray-100">
              You can also reach us directly through the details below:
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" /> 
                <span>Faisalabad, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-white" /> 
                support@donationhub.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-white" /> 
                +92 345 678 910
              </p>
            </div>

            {/* 🔹 Social Links */}
            <div className="flex space-x-5 mt-6">
              <a
                href="https://www.saylaniwelfare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100"
              >
                <FaGlobe size={20} />
              </a>
              <a
                href="https://facebook.com/saylaniwelfare"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/OfficialSwit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
            Find Us on the Map
          </h3>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.019294419127!2d73.066!3d31.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392267f57aa3b20b%3A0x5cc3d8f463da0f8!2sFaisalabad!5e0!3m2!1sen!2s!4v1705934021234"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
              title="Donation Hub Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
