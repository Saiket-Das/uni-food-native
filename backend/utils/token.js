const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  // const payload = {
  //   id: userInfo._id,
  //   name: userInfo.name,
  //   email: userInfo.email,
  //   role: userInfo.role,
  //   imageURL: userInfo.imageURL,

  // };

  const token = jwt.sign({ data: id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
