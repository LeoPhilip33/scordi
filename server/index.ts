require('dotenv').config();
import express from 'express';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})