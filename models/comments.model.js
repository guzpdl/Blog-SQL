module.exports = (sequelize, Model, DataTypes) => {
  class Comment extends Model {}
  Comment.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { sequelize, modelName: "comment" }
  );

  return Comment;
};
