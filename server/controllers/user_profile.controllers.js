const User = require("../models/user.models");

// :::::::: MY PROFILE :::::::::::::::::
exports.handleGetMyProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.user.id).select("-password");
    // console.log({ profile: profile });
    if (!profile) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    return res.status(200).json({ data: profile, success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
};

// exports.handleGetMyProfile = async (req, res) => {
// //   const profile = await User.findById(req.params.id);
// const userId = req.user.id || req.user._id;
//   const profile = await User.findById({id: userId});
//   return res.status(200).json({ data: profile, success: true });
// };

// :::::::: Get task list :::::::::::::::::
// exports.handleGetAllTask = async (req, res) => {
//   const taskList = await Task.find({});
//   return res
//     .status(200)
//     .json({ data: taskList, user: req.user, success: true });
// };

// :::::::: Get task by Id :::::::::::::::::
// exports.handleGetTaskById = async (req, res) => {
//   const task = await Task.findById(req.params.id);
//   return res.status(200).json({ data: task, success: true });
// };

// :::::::: Update task :::::::::::::::::
// exports.handleUpdateTaskById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;
//     if (!updateData || Object.keys(updateData).length === 0) {
//       return res.status(400).json({ message: "No data provide to update" });
//     }
//     const updateTask = await Task.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });
//     if (!updateTask) {
//       return res.status(404).json({ message: "Faield to update task" });
//     }
//     res
//       .status(200)
//       .json(
//         updateTask,
//         { message: "Task updated successfully" },
//         { success: true },
//       );
//   } catch (error) {
//     console.error("Error updating task: ", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// ::::::::::: Delete task ::::::::::::::

// exports.handleDeleteTaskById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Task.findByIdAndDelete(id);
//     res.status(200).json({ message: `Task deleted with id : ${id}` });
//   } catch (error) {
//     console.error("Error deleting Task:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };
