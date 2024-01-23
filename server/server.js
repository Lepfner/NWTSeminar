const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

const uri =
  "mongodb+srv://lepfner:BRT50CG36C@cluster0.pscu27l.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(credentials);
app.options("*", cors(corsOptions));

const authRouter = require("./routes/auth");
app.use("/", authRouter);
const productRouter = require("./routes/product");
app.use("/", productRouter);
const manufacturerRouter = require("./routes/manufacturer");
app.use("/", manufacturerRouter);
app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.get("/", (req, res) => res.send("index"));
