import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import blogRoutes from "./routes/blog.route.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blog", blogRoutes);

app.get("/", (req, res) => {
  res.send("Express server is Running");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
  connectDB();
});
