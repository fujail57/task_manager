const express = require("express");
const userProfileRoutes = express.Router();

const userProfileControllers = require("../controllers/user_profile.controllers");

// USER PROFILE
userProfileRoutes.get("/profile", userProfileControllers.handleGetMyProfile);
module.exports = { userProfileRoutes };
