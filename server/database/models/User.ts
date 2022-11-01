import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface UserAttributes {
    id: number
    email: string
    password: string
    pseudo: string
    avatar: string
    birth_date: number
    custom_Id: number
}

interface UserCreationAttributes extends Optional<UserAttributes, 'avatar'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
        createdAt? : Date;
        updatedAt: Date;
    }

const User = sequelize.define<UserInstance>('Users', {
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
})

export default User