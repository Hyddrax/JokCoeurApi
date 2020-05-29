'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Emots', [
      {
        lib: "lib1",
        color: "#00F",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib2",
        color: "#f00",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib3",
        color: "#0f0",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib4",
        color: "#0FF",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib5",
        color: "#fF0",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        lib: "lib6",
        color: "#F0F",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Emots', null, {});
  }
};
