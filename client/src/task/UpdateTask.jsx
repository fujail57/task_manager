import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { Loading } from "../components/Loading";
import { BackNavButton } from "../components/button/BackNavButton";
import { useQuery } from "@tanstack/react-query";
import { getApiQuery } from "../utils/apiQuery";

export const UpdateTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getApiQuery(`/task/${id}`),
  });

  useEffect(() => {
    if (data) {
      reset({
        title: data?.data?.title,
        description: data?.data?.description,
        status: data?.data?.status,
      });
    }
  }, [data, reset]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-300px">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center text-red-600">
        Error: {error.message}
      </div>
    );

  const handleUpdateFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.patch(`/task/${id}`, data);
      // console.log("Task updated Successfully", response.data);
      alert("Task updated Successfully");
      navigate("/tasks");
    } catch (error) {
      console.log("Task update failed", error);
      alert(error.response?.data?.message || "Task update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BackNavButton />
          <h2 className="text-lg font-semibold text-gray-800">
            Update Task Status
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdateFormSubmit)}
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
              value={isSubmitting ? "Updating..." : "Update"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div>
        </form>

        <BackNavButton name="Back" />
      </div>
    </div>
  );
};
