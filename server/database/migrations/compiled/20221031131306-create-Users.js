"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable('Users', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                type: sequelize_1.DataTypes.STRING
            },
            pseudo: {
                type: sequelize_1.DataTypes.STRING
            },
            avatar: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            birth_date: {
                type: sequelize_1.DataTypes.INTEGER
            },
            custom_Id: {
                type: sequelize_1.DataTypes.INTEGER
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('Users');
    }
};
