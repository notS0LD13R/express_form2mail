import express, { Router } from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8080;

export const app = express();

const router = Router();

router.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT);
