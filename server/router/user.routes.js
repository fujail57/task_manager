const express = require("express");
const userRoutes = express.Router();

const userControllers = require("../controllers/user.controllers");

// routes
userRoutes.post("/register", userControllers.handlePostSignup);
userRoutes.post("/login", userControllers.handlePostLogin);
userRoutes.post("/logout", userControllers.handlePostLogout);

module.exports = { userRoutes };
