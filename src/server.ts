import express, { Router } from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8080;

export const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT);
