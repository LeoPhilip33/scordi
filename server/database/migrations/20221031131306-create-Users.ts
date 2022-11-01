import {
    QueryInterface,
    DataTypes
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('Users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true 
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            pseudo: {
                type: DataTypes.STRING
            },
            avatar : {
                type: DataTypes.STRING,
                allowNull: true
            },
            birth_date: {
                type: DataTypes.INTEGER
            },
            custom_Id: {
                type : DataTypes.INTEGER
            }
        });
    },

    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('Users');
    }
};
