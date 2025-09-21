import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">DonateHub</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            A better way to donate – transparent, impactful, and easy.
            Empowering change, one contribution at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/donations" className="hover:text-white">
                Donations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
          <p className="text-gray-300 text-sm mb-3">
            Email: support@donatehub.com
          </p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.facebook.com/SaylaniWelfareInternationalTrust"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FacebookFilled />
            </a>
            <a
              href="https://twitter.com/OfficialSwit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <TwitterSquareFilled />
            </a>
            <a
              href="https://www.instagram.com/saylaniwelfare/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <InstagramFilled />
            </a>
            <a
              href="https://www.linkedin.com/company/saylani-welfare/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <LinkedinFilled />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Mohammad Sahil. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
