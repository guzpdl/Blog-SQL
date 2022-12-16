const { faker } = require("@faker-js/faker");
const { Article } = require("../models/index");

module.exports = async function createArticle() {
  const articlesArr = [];

  for (i = 0; i < 10; i++) {
    articlesArr.push({
      title: faker.vehicle.vehicle(),
      content: faker.lorem.paragraph(),
      image: faker.image.cats(),
      authorId: Math.floor(Math.random() * 6) + 1,
    });
  }
  await Article.bulkCreate(articlesArr);
};
