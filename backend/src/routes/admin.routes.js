import express from "express";
import {
  adminLoginController,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdminController,
  getAllCommentsController,
  getDashBoardController,
} from "../controllers/admin.controller.js";
import { protectRoute } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post("/login", adminLoginController);
router.get("/comments", protectRoute, getAllCommentsController);
router.get("/blogs", protectRoute, getAllBlogsAdminController);
router.delete("/delete-comment", protectRoute, deleteCommentById);
router.post("/approve-comment", protectRoute, approveCommentById);
router.get("/dashboard", protectRoute, getDashBoardController);

export default router;
