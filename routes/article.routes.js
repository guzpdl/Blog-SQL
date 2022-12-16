const router = require("express").Router();
const {
  submitNewArticle,
  editArticle,
  deleteArticle,
  updateArticle,
} = require("../controller/articles.controller");

router.get("/edit/:id", editArticle);

router.delete("/delete/:id", deleteArticle);

router.post("/submitNewArticle", submitNewArticle);

router.put("/update/:id", updateArticle);

module.exports = router;
