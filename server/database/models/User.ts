import { DataTypes } from "sequelize";
import sequelize from "../index";

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true        
    },
    email : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    pseudo : {
        type: DataTypes.STRING
    },
    avatar : {
        type: DataTypes.STRING,
        allowNull: true
    },
    birth_ate : {
        type: DataTypes.INTEGER
    },
    customId: {
        type : DataTypes.INTEGER
    },
    // field created_at and updated_at are utomaticaly created for tables 
    // created_at: {
    //     type: DataTypes.DATE
    // },
    // updated_at: {
    //     type: DataTypes.DATE
    // }
});

(async () => {
    await sequelize.sync({force: true})
})()

export default User

