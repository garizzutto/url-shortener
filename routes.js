'use-strict';
import { Router } from "express";
import { getLongUrl, getShortUrl } from "./controllers/index.js";

const routes = Router();

routes.post("/shortUrl", getShortUrl);

routes.post("/longUrl", getLongUrl);

export default routes;