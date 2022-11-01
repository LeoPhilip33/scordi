require('dotenv').config();
import express from 'express';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))



app.listen(process.env.APP_PORT, () => {
    console.log(`App running on http://localhost:${process.env.APP_PORT}`)
})