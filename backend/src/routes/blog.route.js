import express from "express";
import {
  addBlogController,
  deleteBlogByIdController,
  getAllBlogsController,
  getBlogByIdController,
  togglePublishBlogController,
} from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.middleware.js";
import { protectRoute } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post("/add", upload.single("image"), protectRoute, addBlogController);

router.get("/all", getAllBlogsController);

router.get("/:blogId", getBlogByIdController);

router.delete("/deleteId", protectRoute, deleteBlogByIdController);

router.post("/toggle-publish", protectRoute, togglePublishBlogController);

export default router;
