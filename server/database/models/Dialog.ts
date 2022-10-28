import { DataTypes } from "sequelize";
import sequelize from "../index";
import User from "./User";

const Dialog = sequelize.define('Dialogs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id_1: {
        type: DataTypes.INTEGER,
        references : {
            model: User,
            key: 'id'
        }
    },
    user_id_2 : {
        type: DataTypes.INTEGER,
        references : {
            model: User,
            key: 'id'
        }
    },
    text: {
        type: DataTypes.TEXT,
    },
});

(async() => {
    await sequelize.sync({force: true})
})()

export default Dialog