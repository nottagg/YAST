import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello from express app!");
});

app.listen(port, () => console.log(`Express listening on port ${port}`));
