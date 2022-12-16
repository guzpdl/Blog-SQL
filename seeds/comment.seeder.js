const { faker } = require("@faker-js/faker");
const { Comment } = require("../models/index");

module.exports = async function createComment() {
  const commentArr = [];

  for (i = 0; i < 21; i++) {
    commentArr.push({
      content: faker.lorem.paragraph(),
      articleId: Math.floor(Math.random() * 10) + 1,
      authorId: Math.floor(Math.random() * 6) + 1,
    });
  }
  await Comment.bulkCreate(commentArr);
};
