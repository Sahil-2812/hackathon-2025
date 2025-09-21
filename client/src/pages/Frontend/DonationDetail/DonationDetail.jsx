import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext"   // adjust path

const donationData = [
  { id: 1, category: "Education", image: "https://plus.unsplash.com/premium_photo-1661378462458-7240ebe44deb?w=500&auto=format&fit=crop&q=60", tagline: "Education for Everyone", description: "Education donations support schools, books, teachers, and ensure that every child has access to knowledge and opportunities." },
  { id: 2, category: "Food", image: "https://plus.unsplash.com/premium_photo-1726729321790-9ba7c38dc84b?w=500&auto=format&fit=crop&q=60", tagline: "Better Food for Health", description: "Food donations help fight hunger, ensuring that families receive nutritious meals regularly." },
  { id: 3, category: "Clothes", image: "https://images.unsplash.com/photo-1647098580734-b53e77e1ad96?w=500&auto=format&fit=crop&q=60", tagline: "Clothes for Everyone", description: "Clothing donations provide warmth and dignity to those in need, especially in winter and disaster situations." },
  { id: 4, category: "Water", image: "https://images.unsplash.com/photo-1680355701230-2cc332c30370?w=500&auto=format&fit=crop&q=60", tagline: "Access to Clean Water", description: "Water donations help build wells and provide clean, safe drinking water to underserved communities." },
  { id: 5, category: "Health", image: "https://images.unsplash.com/photo-1659718282962-452648b6eba6?w=500&auto=format&fit=crop&q=60", tagline: "Healthcare for Everyone", description: "Health donations support hospitals, medicines, and urgent medical care for those who cannot afford treatment." },
  { id: 6, category: "Shelter", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60", tagline: "Safe Shelter for All", description: "Shelter donations provide housing, safety, and comfort to homeless families and disaster-affected people." },
  { id: 7, category: "Orphans", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&auto=format&fit=crop&q=60", tagline: "Support for Orphans", description: "Orphan support ensures children without parents receive love, care, education, and shelter." },
  { id: 8, category: "Poverty", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60", tagline: "End Poverty Together", description: "Poverty donations help provide jobs, education, and basic needs to uplift entire communities." },
  { id: 9, category: "Disaster Relief", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60", tagline: "Help Disaster Victims", description: "Disaster relief provides urgent food, shelter, and medical care for people affected by natural calamities." },
  { id: 10, category: "Mosque Support", image: "https://images.unsplash.com/photo-1694886496630-004a1c9807b9?w=500&auto=format&fit=crop&q=60", tagline: "Support for Mosques", description: "Mosque donations support construction, maintenance, and services for the Muslim community." },
  { id: 11, category: "Elderly Care", image: "https://images.unsplash.com/photo-1550057473-5d5a3c03e59e?w=500&auto=format&fit=crop&q=60", tagline: "Care for the Elderly", description: "Elderly care donations provide homes, healthcare, and companionship for senior citizens." },
  { id: 12, category: "Ramadan", image: "https://plus.unsplash.com/premium_photo-1677955072995-0066c6507a10?w=500&auto=format&fit=crop&q=60", tagline: "Ramadan Food Packages", description: "Ramadan donations provide iftar, suhoor, and food packages for families during the blessed month." },
];

const DonationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuth } = useAuthContext(); // 🔹 use your AuthContext here

  const donation = donationData.find((d) => d.id.toString() === id);

  if (!donation) {
    return <h2 className="text-center text-red-600 mt-20">Donation not found</h2>;
  }

  const handleDonateClick = () => {
    if (isAuth) {
      navigate(`/donate/${donation.id}`);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* 🔹 Full Image */}
      <div className="w-full h-80 md:h-[450px] overflow-hidden rounded-lg shadow-lg mb-6">
        <img
          src={donation.image}
          alt={donation.category}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Details */}
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        {donation.category}
      </h1>
      <h2 className="text-lg text-gray-500 mb-4">{donation.tagline}</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        {donation.description}
      </p>

      {/* 🔹 Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDonateClick}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 w-full sm:w-auto text-center"
        >
          Donate Now 💚
        </button>

        <Link
          to="/donations"
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 w-full sm:w-auto text-center"
        >
          ← Back to Donations
        </Link>
      </div>

    </div>
  );
};

export default DonationDetail;
