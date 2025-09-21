import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";

const Home = () => {

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

    <div className="w-full">
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            A Better Way To Donate
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Empower change with every contribution. Join us in making donations
            transparent, impactful, and easy.
          </p>
            <button
            onClick={handleStartDonating}
            className="inline-block mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold shadow-lg"
          >
            Start Donating
          </button>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?w=900&auto=format&fit=crop&q=80"
            alt="About Donation Hub"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Why Donation Hub?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Donate to multiple causes and manage them all in one place, without
            worrying about a middleman taking a cut. We’re on a mission to make
            donating more convenient, transparent and impactful.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As a donor, you can give with confidence, knowing your money goes
            directly to the charity. As an organisation, you can raise more
            funds with lower fees.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Whether you care about education, healthcare, poverty relief, or the
            environment — Donation Hub gives you the power to support causes
            that matter most to you, all in one place.
          </p>

          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* 🔹 Why Use DonationHub Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">
          Why Use DonationHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">💰 Low Fees</h3>
            <p className="text-gray-600">
              We ensure that your donations go directly to the causes you care
              about, with minimal platform fees.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🤝 No Middleman</h3>
            <p className="text-gray-600">
              Your donations reach charities transparently — no hidden cuts, no
              intermediaries.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">⚡ Convenience</h3>
            <p className="text-gray-600">
              Manage multiple donations from a single dashboard and track the
              impact you create.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Impact Section */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-snug">
            By making the giving process more personalised and transparent, we
            can create more positive change in the world.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
