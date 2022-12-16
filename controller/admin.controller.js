const { Article, Author, Comment } = require("../models/index");

const editArticleAdmin = async (req, res) => {
  const articleId = req.params.id;
  const articleInfo = await Article.findByPk(articleId);
  res.status(200).json(articleInfo);
};

const submitNewArticleAdmin = async (req, res) => {
  const authorId = req.auth.id;
  const { title, content, image } = req.body;
  await Article.create({
    title: title,
    content: content,
    image: image,
    authorId: authorId,
  });
  res.sendStatus(201);
};

const deleteArticleAdmin = async (req, res) => {
  await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(200);
};

const updateArticleAdmin = async (req, res) => {
  const articleId = req.params.id;
  const { title, content, image } = req.body;

  await Article.update(
    {
      title: title,
      content: content,
      image: image,
    },
    {
      where: {
        id: articleId,
      },
    }
  );
  res.redirect(`/article/${articleId}`);
};

module.exports = {
  deleteArticleAdmin,
  updateArticleAdmin,
  submitNewArticleAdmin,
  editArticleAdmin,
};
