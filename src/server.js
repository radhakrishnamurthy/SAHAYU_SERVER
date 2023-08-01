import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
config();
const Port = process.env.PORT;
import { establishDBConnection, setKnexForRequest } from "./index.js";
const app = express();
import allRoutes from "./controller/index.js";
app.use(bodyParser.json());
app.use(cors());
app.use(async (req, res, next) => {
  // console.log("incomingRequest", req);
  req.knex = setKnexForRequest(req);
  next();
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Start the server
app.listen(Port, () => {
  // establishDBConnection();
  console.log(`Server is running on port ${Port}`);
});
app.use(allRoutes);
