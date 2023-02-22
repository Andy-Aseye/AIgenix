import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: 1024102420, type: "application/json" }));

app.use("*", (req, res, next) => {
  console.info({
    scope: "Request",
    data: {
      ip: req.header["x-forwarded-for"] || req.socket.remoteAddress,
      url: req.originalUrl,
      method: req.method,
      body: req?.body,
      date: new Date().toUTCString(),
    },
  })
  next();
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello AI!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server has started running on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
