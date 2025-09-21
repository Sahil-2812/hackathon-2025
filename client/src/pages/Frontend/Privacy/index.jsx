import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At DonationHub, your privacy is very important to us. This policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect information that you provide when creating an account, making a donation, or contacting us. This includes your name, email address, and payment details.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is used to process donations, provide receipts, and keep you updated about your impact. We do not sell or trade your information with third parties.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">3. Security</h2>
        <p className="text-gray-700 mb-4">
          We implement industry-standard security measures to protect your personal data and financial information.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">4. Contact Us</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy, please contact us at <span className="font-semibold">privacy@donationhub.com</span>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
