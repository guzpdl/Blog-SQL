const { Article, Author, Comment } = require("../models/index");

const showAllArticles = async (req, res) => {
  const articleData = await Article.findAll();
  // res.render("home", { articleData });
  res.status(200).json(articleData);
};

const showOneArticle = async (req, res) => {
  const articleId = req.params.id;

  const articleInfo = await Article.findByPk(articleId, {
    include: [
      {
        model: Author,
      },
      {
        model: Comment,
        include: {
          model: Author,
        },
      },
    ],
  });
  // res.render("article", { articleInfo });
  res.status(200).json(articleInfo);
};

const submitNewArticle = async (req, res) => {
  const authorId = req.auth.id;
  const { title, content, image } = req.body;
  await Article.create({
    title: title,
    content: content,
    image: image,
    authorId: authorId,
  });
  // res.redirect("/");
  res.sendStatus(204);
};

const editArticle = async (req, res) => {
  const articleId = req.params.id;
  const loggedAuthorId = req.auth.id;
  const articleInfo = await Article.findByPk(articleId);
  const articleAuthorId = articleInfo.authorId;
  if (articleAuthorId === loggedAuthorId) {
    // res.render("editArticle", { articleInfo });
    res.status(200).json(articleInfo);
  } else {
    res.sendStatus(401);
  }
};

const deleteArticle = async (req, res) => {
  const articleId = req.params.id;
  const loggedAuthorId = req.auth.id;
  const articleInfo = await Article.findByPk(articleId);
  const articleAuthorId = articleInfo.authorId;
  if (articleAuthorId === loggedAuthorId) {
    await Article.destroy({
      where: {
        id: articleId,
      },
    });
    res.sendStatus(204);
  } else {
    res.sendStatus(401);
  }
};

const updateArticle = async (req, res) => {
  const articleId = req.params.id;
  const { title, content, image } = req.body;
  const loggedAuthorId = req.auth.id;
  const articleInfo = await Article.findByPk(articleId);
  const articleAuthorId = articleInfo.authorId;
  if (articleAuthorId === loggedAuthorId) {
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
    res.sendStatus(204);
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  showAllArticles,
  showOneArticle,
  submitNewArticle,
  editArticle,
  deleteArticle,
  updateArticle,
};
