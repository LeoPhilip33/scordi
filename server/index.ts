require('dotenv').config();
import express from 'express';
import bodyParser from "body-parser";
import sequelize from './database';
import Users from './database/models/User';
import Dialog from './database/models/Dialog';
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 5000;

const testingDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await Dialog.sync()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testingDbConnection()

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})