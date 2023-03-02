const express = require("express");
const connectDB = require("./config/db.js");
var cors = require("cors");

const app = express();

//routes
const User = require("./routes/userRoute.js");
const Information = require("./routes/informationRoutes.js");

// Connect Database
connectDB();

// cors
app.use(cors({
    origin: 'https://resume-builder-1l9f.onrender.com',
    optionsSuccessStatus: 200 
  }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('imagecheck'));

//use routes
app.use("/api/user", User);
app.use("/api/info", Information);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));