'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: "test1@test.fr",
        password: "password",
        name: "name",
        lastname: "lastname",
        age: 18,
        profession: "profession",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        email: "test2@test.fr",
        password: "password",
        name: "name",
        lastname: "lastname",
        age: 18,
        profession: "profession",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        email: "test3@test.fr",
        password: "password",
        name: "name",
        lastname: "lastname",
        age: 18,
        profession: "profession",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
