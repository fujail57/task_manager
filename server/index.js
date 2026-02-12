// External Module
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Local Module
const { connectToMongoDb } = require("./connection");

const { isAuthenticated } = require("./middleware/isAuthenticated");
const { authCheckRoutes } = require("./router/auth_check.routes");
const { userRoutes } = require("./router/user.routes");
const { taskRoutes } = require("./router/task.routes");
const { userProfileRoutes } = require("./router/user_profile.routes");

// Connections
connectToMongoDb(process.env.MONGO_URL);

// Middleweare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// API
app.use("/api", userRoutes);

app.use("/api", isAuthenticated, authCheckRoutes);
app.use("/api", isAuthenticated, taskRoutes);
app.use("/api", isAuthenticated, userProfileRoutes);

// 404 - Page not found -> error
// app.use((req, res, next) => {
//   res.json({ message: "404 - Page not found" });
//   next();
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`),
);
