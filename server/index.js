import express from 'express';
import mongoDB from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());

mongoDB();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))




app.use("/", Router);

app.listen(PORT, ()=>{
    console.log(`server is started on http://localhost:${PORT}`);
})
