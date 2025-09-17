import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../config/serverConfig.js";
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
