import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";
import { BackNavButton } from "../components/button/BackNavButton";

export const AddTask = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleAddFormSubmit = async (data) => {
    // console.log({ "Sending data: ": data });
    try {
      const response = await axiosInstance.post("/task", data);
      alert("New Task added Successfully");
      reset();
      navigate("/my-task");
    } catch (error) {
      console.log("Task can't add", error);
      // alert("Task can't add");
      alert(error.response?.data?.message || "Failed to add task");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Add New Task
        </h2>

        <form
          onSubmit={handleSubmit(handleAddFormSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Title"
              type="text"
              {...register("title", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Description"
              type="text"
              {...register("description", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <select
              {...register("status")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Submitting..." : "Submit"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div>
        </form>

        <div className="mt-6 text-center">
          <BackNavButton name="Back" />
        </div>
      </div>
    </div>
  );
};
