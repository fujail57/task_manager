const bcrypt = require("bcryptjs");
// local module
const User = require("../models/user.models");
const { generateToken } = require("../services/generateToken");

//  :: Register user :::::::::::::::::::::
exports.handlePostSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required " });
  }
  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User already exist" });
  // console.log({ body: req.body });
  // console.log({ user: userExist });
  try {
    await User.create({
      name,
      email,
      password,
    });
    return res.status(201).json({ message: "User registerd successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went erong", error: error.message });
  }
};

//  :: Login user ::::::::::::::

exports.handlePostLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    const token = generateToken(payload);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    return res
      .status(200)
      .json({ message: "Login successfully", role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  :: Logout agent/user :::::::::::::::::::
exports.handlePostLogout = async (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
};
