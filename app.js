const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const app = express();

const AdminuserRoutes = require("./routes/adminUser.routes");
const OtpRoutes = require("./routes/otp.routes")
const PatientRoutes = require("./routes/patients.routes")
connectToDb()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/" , (req, res)=>{
    res.send("Hello World")
});

app.use("/admin", AdminuserRoutes)
app.use("/otp",OtpRoutes)
app.use("/patient" , PatientRoutes)
module.exports = app