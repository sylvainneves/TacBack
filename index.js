const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
const dotenv = require("dotenv");

//Import Routes

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const reservationRoute = require("./routes/reservation");

dotenv.config();

//connect to DB

mongoose.connect(
  process.env.DB_CONNECT,

  () => console.log("connected to DB")
);

//Middleware
app.use(express.json());

//Route Middelware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/reservation", reservationRoute);

app.listen(3000, () => console.log("Server Up and running"));
