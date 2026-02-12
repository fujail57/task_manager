const express = require("express");
const taskRoutes = express.Router();

const taskControllers = require("../controllers/task.controllers");

taskRoutes.post("/task", taskControllers.HandlePostNewTask);

taskRoutes
  .route("/task/:id")
  .get(taskControllers.handleGetTaskById)
  .patch(taskControllers.handleUpdateTaskById)
  .delete(taskControllers.handleDeleteTaskById);

taskRoutes.get("/my-task", taskControllers.handleGetMyTask);
taskRoutes.get("/all-task", taskControllers.handleGetAllTask);

// exports
module.exports = { taskRoutes };
