import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../config/serverConfig.js";
import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";
import { generateJwtToken } from "../utils/generateJwtToken.js";

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    generateJwtToken("admin", res);

    res.status(200).json({
      success: true,
      message: "Admin Login successfully",
      email: ADMIN_EMAIL,
    });
  } catch (error) {
    console.log("Error in adminlogin controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBlogsAdminController = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.log("Error in getAllBlogsAdmin controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllCommentsController = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    console.log("Error in getAllComments controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashBoardController = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });

    const dashBoardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };

    res.status(200).json({
      success: true,
      dashBoardData,
    });
  } catch (error) {
    console.log("Error in getDashBoard controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.log("Error in deleteCommentById controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndUpdate(id, { isApproved: true });

    res.status(200).json({
      success: true,
      message: "Comment approved successfully",
    });
  } catch (error) {
    console.log("Error in approveCommentById controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
