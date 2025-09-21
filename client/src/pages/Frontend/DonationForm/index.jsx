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
      // 1️⃣ Create payment intent on server
      const { data } = await axios.post("http://localhost:8000/api/payment", {
        amount: formData.amount,
      });

      // 2️⃣ Confirm card payment
      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
          },
        },
      });

      if (error) {
        alert(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("✅ Payment successful! Thank you for your donation.");
        // Optional: save donation info to backend
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  if (!donation) return <h2>Donation not found</h2>;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-6 bg-white shadow rounded-lg">
      {/* Name, Email, Phone, Amount Inputs */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount (PKR)"
        required
      />

      {/* Stripe Card Input */}
      <div className="p-2 border rounded">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      <button type="submit" disabled={!stripe} className="bg-green-600 text-white px-4 py-2 rounded">
        Donate 💚
      </button>
    </form>
  );
};

export default DonationForm;
