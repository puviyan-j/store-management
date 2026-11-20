import "dotenv/config";
import express from "express";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
  res.json({
    cose: error.cod ?? 500,
    message: error.message ?? "internal server error",
  });
});

app.listen(5000, () => {
  console.log("server running");
});
