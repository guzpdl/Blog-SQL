const router = require("express").Router();
const {
  submitNewArticleAdmin,
  editArticleAdmin,
  deleteArticleAdmin,
  updateArticleAdmin,
} = require("../controller/admin.controller");

router.get("/edit/:id", editArticleAdmin);

router.delete("/delete/:id", deleteArticleAdmin);

router.post("/submitNewArticle", submitNewArticleAdmin);

router.put("/update/:id", updateArticleAdmin);

module.exports = router;
