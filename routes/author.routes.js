const router = require("express").Router();
const {
  submitRegistry,
  loginAuthor,
} = require("../controller/authors.controller");

router.post("/register", submitRegistry);

router.post("/login", loginAuthor);

module.exports = router;
