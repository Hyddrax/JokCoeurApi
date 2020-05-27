'use strict';
module.exports = (sequelize, DataTypes) => {
    const Emot = sequelize.define('Emot', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        lib: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    Emot.associate = function (models) {
        // associations can be defined here
        //Emot.belongsToMany(models.User, { through: 'EmotStats', foreignKey: 'emotId' })
    };
    return Emot;
};