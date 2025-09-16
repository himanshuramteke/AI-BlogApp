import express from "express";
import { addBlogController } from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.middleware.js";
import { protectRoute } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post("/add", upload.single("image"), protectRoute, addBlogController);

export default router;
