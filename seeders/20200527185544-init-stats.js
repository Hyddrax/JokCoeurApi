'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('EmotStats', [
      {
        userId: "1",
        emotId: "1",
        emotValue: "11",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        userId: "1",
        emotId: "2",
        emotValue: "21",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        userId: "1",
        emotId: "3",
        emotValue: "31",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },
      {
        userId: "2",
        emotId: "2",
        emotValue: "111",
        createdAt: "2020-05-27",
        updatedAt: "2020-05-27",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('EmotStats', null, {});
  }
};
