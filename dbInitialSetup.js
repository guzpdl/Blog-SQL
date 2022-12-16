const { sequelize } = require("./models/index");
const createAuthor = require("./seeds/author.seeder");
const createArticle = require("./seeds/article.seeder");
const createComment = require("./seeds/comment.seeder");

module.exports = function setupServer() {
  sequelize
    .sync({ force: true })

    .then(async () => {
      console.log(`¡Las tablas fueron creadas!`);

      await createAuthor();
      await createArticle();
      await createComment();
    });
};
