const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  //   const payload = {
  //     id: userInfo._id,
  //     name: userInfo.name,
  //     email: userInfo.email,
  //     role: userInfo.role,
  //   };

  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
