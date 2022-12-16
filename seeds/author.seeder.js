const { faker } = require("@faker-js/faker");
const { Author } = require("../models/index");

module.exports = async function createAuthor() {
  const authorArr = [];

  for (i = 0; i < 6; i++) {
    authorArr.push({
      name: faker.name.firstName(),
      lastname: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }
  await Author.bulkCreate(authorArr);
};
