const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
      // index: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      //   required: true,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
