import React, { useState } from "react";
import { Link } from "react-router-dom";

const donationData = [
  {
    id: 1,
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1661378462458-7240ebe44deb?w=500&auto=format&fit=crop&q=60",
    tagline: "Education for Everyone",
  },
  {
    id: 2,
    category: "Food",
    image:
      "https://plus.unsplash.com/premium_photo-1726729321790-9ba7c38dc84b?w=500&auto=format&fit=crop&q=60",
    tagline: "Better Food for Health",
  },
  {
    id: 3,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1647098580734-b53e77e1ad96?w=500&auto=format&fit=crop&q=60",
    tagline: "Clothes for Everyone",
  },
  {
    id: 4,
    category: "Water",
    image:
      "https://images.unsplash.com/photo-1680355701230-2cc332c30370?w=500&auto=format&fit=crop&q=60",
    tagline: "Access to Clean Water",
  },
  {
    id: 5,
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1659718282962-452648b6eba6?w=500&auto=format&fit=crop&q=60",
    tagline: "Healthcare for Everyone",
  },
  {
    id: 6,
    category: "Shelter",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60",
    tagline: "Safe Shelter for All",
  },
  {
    id: 7,
    category: "Orphans",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&auto=format&fit=crop&q=60",
    tagline: "Support for Orphans",
  },
  {
    id: 8,
    category: "Poverty",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60",
    tagline: "End Poverty Together",
  },
  {
    id: 9,
    category: "Disaster Relief",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60",
    tagline: "Help Disaster Victims",
  },
  {
    id: 10,
    category: "Mosque Support",
    image:
      "https://images.unsplash.com/photo-1694886496630-004a1c9807b9?w=500&auto=format&fit=crop&q=60",
    tagline: "Support for Mosques",
  },
  {
    id: 11,
    category: "Elderly Care",
    image:
      "https://images.unsplash.com/photo-1550057473-5d5a3c03e59e?w=500&auto=format&fit=crop&q=60",
    tagline: "Care for the Elderly",
  },
  {
    id: 12,
    category: "Ramadan",
    image:
      "https://plus.unsplash.com/premium_photo-1677955072995-0066c6507a10?w=500&auto=format&fit=crop&q=60",
    tagline: "Ramadan Food Packages",
  },
];

function Donations() {
  const [search, setSearch] = useState("");

  const filteredDonations = donationData.filter((donation) =>
    donation.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 🔹 Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        I Grow By Helping People In Need
      </h1>

      {/* 🔹 Search Field */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search category here"
          className="w-full md:w-1/2 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-green-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700">
          Search
        </button>
      </div>

      {/* 🔹 Donation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredDonations.map((donation) => (
          <Link
            key={donation.id}
            to={`/donations/${donation.id}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition block"
          >
            <img
              src={donation.image}
              alt={donation.category}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {donation.category}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{donation.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Donations;
