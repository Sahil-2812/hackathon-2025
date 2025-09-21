const express = require("express");
const router = express.Router();
const Campaign = require("../../models//campaign.model");
const verifyToken = require("../../middlewares/token/verifyToken");

// 🔹 GET all campaigns of the logged-in NGO
router.get("/", verifyToken, async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(campaigns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to fetch campaigns" });
  }
});

// 🔹 CREATE a new campaign
router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCampaign = new Campaign({ title, description, createdBy: req.user.id });
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to create campaign" });
  }
});

// 🔹 UPDATE a campaign
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const campaign = await Campaign.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { title, description },
      { new: true }
    );
    if (!campaign) return res.status(404).json({ msg: "Campaign not found" });
    res.json(campaign);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to update campaign" });
  }
});

// 🔹 DELETE a campaign
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const campaign = await Campaign.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
    if (!campaign) return res.status(404).json({ msg: "Campaign not found" });
    res.json({ msg: "Campaign deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to delete campaign" });
  }
});

module.exports = router;
