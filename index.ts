import express, { Application } from "express";
import cors from "cors";
import http from "node:http";
import { Server } from "socket.io";
import serverless from "serverless-http";

const app: Application = express();
const router = express.Router();

app.use(express.json());

app.use(cors());

router.get("/", (req, res) => {
  res.send("App is running..");
});
router.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(1122, () => {
  console.log("server connected");
});

app.use("/.netlify/functions/app", router);
// module.exports.handler = serverless(app);
module.exports.handler = serverless(app);
