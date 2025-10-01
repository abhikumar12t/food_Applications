const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const db = require('./database/dbConnection');

const resevationRoutes = require('./routes/reservation.routes');
const { errorMeddlewere } = require("./error/error");

//  Connect DB
db();

// Middlewares
app.use(cors({
  origin: "https://food-applications.vercel.app/",
  methods: ['POST'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user/resevation', resevationRoutes);

app.use(errorMeddlewere);


app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

module.exports = app;
