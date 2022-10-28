require('dotenv').config();
import express from 'express';
import bodyParser from "body-parser";
import sequelize from './database';
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 5000;

const testingDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testingDbConnection()

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})