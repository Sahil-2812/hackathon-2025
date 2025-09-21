const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const { PORT, MONGODB_URL, STRIPE_SECRET_KEY } = process.env;
const port = PORT || 8000;

// 🔹 Import routes
const authRouter = require("./Routes/Auth/auth.routes");

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 MongoDB Connection
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(error));

// 🔹 Routes
app.use("/api", authRouter);

// 🔹 Stripe Payment Route
const Stripe = require("stripe");
const stripe = new Stripe(STRIPE_SECRET_KEY);

app.post("/api/payment", async (req, res) => {
  const { amount, currency = "usd" } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to smallest currency unit
      currency,
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
});

// 🔹 Test Route
app.get("/", (req, res) => {
  res.send("Server is online");
});

// 🔹 Start Server
app.listen(port, () => {
  console.log(`Your server is online at http://localhost:${port}`);
});
