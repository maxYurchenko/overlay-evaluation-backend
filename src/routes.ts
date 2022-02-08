import { Router } from "express";
const json = require("./routes/json");
const delay = require("./routes/delay");
const encode = require("./routes/encode");
const decode = require("./routes/decode");

const routes = Router();

routes.get("/", json.get);
routes.get("/json", json.get);
routes.get("/delay", delay.get);
routes.get("/decode", decode.get);
routes.get("/encode", encode.get);

export default routes;
