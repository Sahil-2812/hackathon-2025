import React from "react";

const Terms = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Terms & Conditions</h1>
        <p className="text-gray-700 mb-4">
          Welcome to DonationHub. By using our services, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">1. Donations</h2>
        <p className="text-gray-700 mb-4">
          All donations made through DonationHub are final and non-refundable, unless required by law. Donations are directed to the selected verified organizations.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">2. User Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          Users must provide accurate information when registering and making donations. Misuse of the platform may result in suspension of access.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">3. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          DonationHub is not liable for misuse of funds by third-party organizations. However, we only onboard verified charities to ensure trust.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">4. Updates</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms & Conditions from time to time. Continued use of our services constitutes acceptance of any changes.
        </p>
      </div>
    </section>
  );
};

export default Terms;
