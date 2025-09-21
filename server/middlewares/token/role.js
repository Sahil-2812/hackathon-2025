// middleware/role.js
const User = require("../models/User"); // User model

const roleMiddleware = (requiredRole) => {
  return async (req, res, next) => {
    try {
      // req.user.id ya decoded token me id hoga
      const user = await User.findById(req.user.id);

      if (!user) return res.status(404).json({ msg: "User not found" });

      if (user.role !== requiredRole)
        return res.status(403).json({ msg: "Forbidden: Access denied" });

      next(); // user role match karta hai
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };
};

module.exports = roleMiddleware;
