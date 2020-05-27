'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmotStats = sequelize.define('EmotStats', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emotId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emotValue: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    EmotStats.associate = function (models) {
        // associations can be defined here
        EmotStats.belongsTo(models.User, { foreignKey: 'userId' })
        EmotStats.belongsTo(models.Emot, { foreignKey: 'emotId' })

        // EmotStats.belongsTo(models.User, { foreignKey: 'userId' });
        // EmotStats.belongsTo(models.Emot, { foreignKey: 'emotId1' });
        // EmotStats.belongsTo(models.Emot, { foreignKey: 'emotId2' });
        // EmotStats.belongsTo(models.Emot, { foreignKey: 'emotId3' });
        // EmotStats.belongsTo(models.Emot, { foreignKey: 'emotId4' });

    };
    return EmotStats;
};