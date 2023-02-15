'use-strict';
import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes)

const port = process.env.PORT || 3333;
app.listen(port, async () => {
  console.log(`Server started on port ${port}!`);
});