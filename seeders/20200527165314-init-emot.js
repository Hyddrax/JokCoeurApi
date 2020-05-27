'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Emots', [
      {
        lib: "lib1",
        color: "color1",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib2",
        color: "color2",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib3",
        color: "color3",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Emots', null, {});
  }
};
