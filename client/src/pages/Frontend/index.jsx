import React from "react";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Home from "./Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "./About";
import Donations from "./Donations";
import Contact from "./Contact";
import FAQ from "./FAQ";
import PrivacyPolicy from "./Privacy";
import Terms from "./Terms";
import DonationDetail from "./DonationDetail/DonationDetail";
import DonationForm from "./DonationForm";

import donationData from "../../data/donationData";
import Blog from "./Blog/Blog";

const stripePromise = loadStripe("pk_test_51S9ohiLnDXly5OqPLajKL2SIwnWsDB23iU9ZPEX0A68VsFktdSAVFG4CjgRBYpGgE4riKvxAYPGU4TgNpIQ8MPN900nhbrIFX7"); // your Stripe publishable key

const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="donations" element={<Donations />} />
        <Route path="/donations/:id" element={<DonationDetail />} />
        <Route
          path="/donate/:id"
          element={
            <Elements stripe={stripePromise}>
              <DonationForm donationData={donationData} />
            </Elements>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Frontend;
