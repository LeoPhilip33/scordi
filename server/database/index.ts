import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('scordi', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize



