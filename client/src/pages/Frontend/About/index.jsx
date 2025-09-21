import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";

const About = () => {

  const navigate = useNavigate();
  const { isAuth } = useAuthContext(); 

   const handleStartDonating = () => {
    if (isAuth) {
      navigate("/donations"); // 🔹 agar login hai to donation page pe bhejo
    } else {
      navigate("/auth/register"); // 🔹 agar login nahi hai to register/login page pe bhejo
    }
  };



  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About DonateHub</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Empowering donors and organizations to create real impact with
          transparency, trust, and ease of giving.
        </p>
      </section>

      {/* 🔹 Our Mission */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1657972590667-5d94b96ec583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2xpbSUyMGRvbmF0aW9ufGVufDB8fDB8fHww"
            alt="Muslim giving charity"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold">DonateHub</span>, our mission is
            to revive the true spirit of giving — whether it’s{" "}
            <span className="italic">Zakat</span>, <span className="italic">Sadaqah</span>,
            or supporting global humanitarian causes. We believe in making
            donations more <strong>convenient, transparent, and impactful</strong>,
            so every penny reaches those in need.
          </p>
        </div>
      </section>

      {/* 🔹 How It Works */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            How DonateHub Works
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            We connect donors with trusted causes and ensure{" "}
            <strong>100% transparency</strong> in the donation process.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">1. Choose a Cause</h3>
              <p className="text-gray-600">
                Explore education, healthcare, poverty relief, or environmental
                projects — all verified and trusted.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">2. Donate Securely</h3>
              <p className="text-gray-600">
                Give with confidence using safe and protected payment gateways.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">3. Track Impact</h3>
              <p className="text-gray-600">
                Get real updates and see how your donation is changing lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Our Values */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
              alt="Low Fees"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Low Fees</h3>
            <p className="text-gray-600">
              More of your donation goes directly to the cause — not
              middlemen.
            </p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="No Middleman"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              No Middleman
            </h3>
            <p className="text-gray-600">
              We connect you directly with verified charities and
              organizations.
            </p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Convenience"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Convenience
            </h3>
            <p className="text-gray-600">
              Donate to multiple causes, track them all, and manage everything
              in one platform.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Why Choose DonateHub?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>✅ 100% Transparent – Know exactly where your money goes.</li>
            <li>✅ Multiple Causes – Manage all your donations in one place.</li>
            <li>✅ Lower Fees – More funds reach the charities.</li>
            <li>✅ Verified Charities – Only trusted organizations onboarded.</li>
            <li>✅ Secure Payments – Donations are always protected.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.pexels.com/photos/6994942/pexels-photo-6994942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900"
            alt="Charity Giving"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* 🔹 Call to Action */}
      <section
        className="relative bg-cover bg-center text-white text-center py-20 px-6"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            By making giving more personalized and transparent, <br /> we can
            create more positive change in the world.
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Join us in reviving the spirit of charity and supporting communities
            across the globe.
          </p>
          <button
            onClick={handleStartDonating}
            className="inline-block mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold shadow-lg"
          >
            Start Donating
          </button>

        </div>
      </section>
    </div>
  );
};

export default About;
