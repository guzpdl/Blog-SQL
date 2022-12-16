const { expressjwt: checkJwt } = require("express-jwt");

module.exports = tokenVerification = () => {
  return checkJwt({ secret: "secret1234", algorithms: ["HS256"] });
};
