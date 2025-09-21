const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String },
    targetGoal: { type: Number, default: 0 },
    raisedAmount: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // NGO id
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", campaignSchema);
