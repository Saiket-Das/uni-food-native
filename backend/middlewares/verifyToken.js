const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "Fail",
        message: "You are not logged in",
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch {
    res.status(403).json({
      status: "Fail",
      message: "Invalid token",
    });
  }
};