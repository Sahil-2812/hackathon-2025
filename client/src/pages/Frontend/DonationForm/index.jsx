import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const DonationForm = ({ donationData }) => {
  const { id } = useParams();
  const donation = donationData.find((d) => d.id.toString() === id);
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    try {
      const { data } = await axios.post("http://localhost:8000/api/payment", {
        amount: formData.amount,
      });

      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: formData.name,
              email: formData.email,
            },
          },
        }
      );

      if (error) {
        alert(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("✅ Payment successful! Thank you for your donation.");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  if (!donation) return <h2>Donation not found</h2>;

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 sm:p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-green-700">
          Donate to {donation.title}
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Donation Amount (PKR)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="500"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Card Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Details
          </label>
          <div className="w-full border border-gray-300 rounded-md px-3 py-3 focus-within:ring-green-500 focus-within:border-green-500">
            <CardElement options={{ hidePostalCode: true }} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition duration-200"
        >
          Donate 💚
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
