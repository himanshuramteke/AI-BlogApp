import fs from "fs";
import imagekit from "../config/imageKitConfig.js";
import Blog from "../models/blog.model.js";

export const addBlogController = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    //check if all fields are present
    if (!title || !subTitle || !description || !category || !isPublished) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    //Uploading image to imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    //optimized the image through imagekit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const image = optimizedImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.log("Error in blog controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBlogsController = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.log("Error in getAllBlogs controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogByIdController = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.log("Error in getBlogById controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlogByIdController = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log("Error in deleteBlogById controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const togglePublishBlogController = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog status updated",
    });
  } catch (error) {
    console.log("Error in togglePublishBlogController", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
