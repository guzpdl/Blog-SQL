const { Article, Author, Comment } = require("../models/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const submitRegistry = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  await Author.create({
    name: name,
    lastname: lastname,
    email: email,
    password: hashedPassword,
  });
  // res.redirect("/");
  res.sendStatus(204);
};

const loginAuthor = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);

  const user = await Author.findOne({ where: { email: email } });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { email: email, id: user.id, admin: user.admin },
      "secret1234"
    );
    console.log(token);
    res.status(204).json(token);
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  submitRegistry,
  loginAuthor,
};
