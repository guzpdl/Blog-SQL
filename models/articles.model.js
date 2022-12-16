module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}
  Article.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.CHAR,
      },
    },
    { sequelize, modelName: "article" }
  );

  return Article;
};
