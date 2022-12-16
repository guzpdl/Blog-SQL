const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "blog_articles_21", // Ej: hack_academy_db
  "root", // Ej: root
  "root", // Ej: root
  {
    host: "127.0.0.1", // Ej: 127.0.0.1
    dialect: "mysql", // Ej: mysql
    port: 3306,
    loggin: false,
  }
);

const Article = require("./articles.model")(sequelize, Model, DataTypes);
const Author = require("./authors.model")(sequelize, Model, DataTypes);
const Comment = require("./comments.model")(sequelize, Model, DataTypes);

Article.belongsTo(Author);
Article.hasMany(Comment);

Author.hasMany(Article);
Author.hasMany(Comment);

Comment.belongsTo(Author);
Comment.belongsTo(Article);

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
};
