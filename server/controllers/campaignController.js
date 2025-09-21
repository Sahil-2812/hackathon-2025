const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign({ ...req.body, ngo: req.user.id });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("ngo", "name");
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate("ngo", "name");
    if (!campaign) return res.status(404).json({ msg: "Campaign not found" });
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
