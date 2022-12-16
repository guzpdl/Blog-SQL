module.exports = checkIfAdmin = (req, res, next) => {
  const authorization = req.auth.admin;

  console.log(authorization);

  if (!authorization) {
    res.send("not an admin");
  } else {
    next();
  }
};
