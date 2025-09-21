import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "How does DonationHub ensure transparency?",
      a: "We partner only with verified charities and provide donors with updates and reports on where their money is used."
    },
    {
      q: "Is there any fee for donating?",
      a: "DonationHub charges minimal processing fees so that maximum funds reach the intended charities."
    },
    {
      q: "Can I track my donations?",
      a: "Yes, donors can log into their account and view detailed donation history and impact reports."
    },
    {
      q: "Is my payment secure?",
      a: "Absolutely. All payments are encrypted and processed through trusted payment gateways."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-green-700">{item.q}</h2>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
