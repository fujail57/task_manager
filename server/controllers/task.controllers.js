const Task = require("../models/task.models");

// :::: Add new task
exports.HandlePostNewTask = async (req, res) => {
  try {
    const { title, description, status, owner } = req.body;

    if (!title || !description)
      return res.status(400).json({ message: "All fields are required" });

    await Task.create({
      title,
      description,
      status,
      owner: req.user.id,
    });
    return res
      .status(201)
      .json({ success: true, message: "Task added successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// :::::::: Get task list :::::::::::::::::
exports.handleGetAllTask = async (req, res) => {
  const taskList = await Task.find({});
  return res
    .status(200)
    .json({ data: taskList, user: req.user, success: true });
};

// :::::::: Get My task list :::::::::::::::::
exports.handleGetMyTask = async (req, res) => {
  const myTask = await Task.find({ owner: req.user.id });
  return res.status(200).json({ data: myTask, user: req.user, success: true });
};

// :::::::: Get task by Id :::::::::::::::::
exports.handleGetTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  return res.status(200).json({ data: task, success: true });
};

// :::::::: Update task :::::::::::::::::
exports.handleUpdateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provide to update" });
    }
    const updateTask = await Task.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateTask) {
      return res.status(404).json({ message: "Faield to update task" });
    }
    res
      .status(200)
      .json(
        updateTask,
        { message: "Task updated successfully" },
        { success: true },
      );
  } catch (error) {
    console.error("Error updating task: ", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// ::::::::::: Delete task ::::::::::::::

exports.handleDeleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: `Task deleted with id : ${id}` });
  } catch (error) {
    console.error("Error deleting Task:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
