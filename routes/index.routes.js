const router = require("express").Router();
const {
  showAllArticles,
  showOneArticle,
} = require("../controller/articles.controller");
const checkIfAdmin = require("../middleware/adminCheck.middleware");
const tokenVerification = require("../middleware/validationToken.middleware");

router.get("/", showAllArticles);

router.get("/article/:id", showOneArticle);

router.use("/article", tokenVerification(), require("./article.routes"));

router.use("/author", require("./author.routes"));

router.use(
  "/admin",
  tokenVerification(),
  checkIfAdmin,
  require("./admin.routes")
);

module.exports = router;
