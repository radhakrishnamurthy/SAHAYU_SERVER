import express from "express";
const sampleRoutes = express();
import { sampleGetHandler } from "./sample.handler.js";
sampleRoutes.get("/sample_get", sampleGetHandler);
export default sampleRoutes;
