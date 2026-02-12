import { Navigate, useNavigate } from "react-router-dom";
import useGetApiQuery from "../utils/useGetApiQuery";
import { Loading } from "../components/Loading";
import { useAuth } from "../authConfig/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getApiQuery } from "../utils/apiQuery";

export const TaskList = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all-task"],
    queryFn: () => getApiQuery("/all-task"),
  });

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

  return (
    <div className="flex justify-center px-4">
      <fieldset className="w-full max-w-6xl border border-gray-300 rounded-lg p-6">
       

        {auth?.role === "user" && (
          <button
            onClick={() => navigate("/task-add")}
            className="px-3 py-1 mb-5 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add new Task
          </button>
        )}

        <legend className="px-2 text-lg font-semibold text-gray-700">
          My Task
        </legend>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Id</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">View</th>
                {auth?.role === "user" && (
                  <th className="border px-4 py-2">Update</th>
                )}
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((task, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">{task._id}</td>
                    <td className="border px-4 py-2">{task.title}</td>
                    <td className="border px-4 py-2 capitalize">
                      {task.description}
                    </td>
                    <td className="border px-4 py-2 capitalize">
                      {task.status}
                    </td>

                    <td className="border px-4 py-2">
                      <button
                        onClick={() => navigate(`/task-view/${task._id}`)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        View
                      </button>
                    </td>

                    {auth.role === "user" && (
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => navigate(`/task-update/${task._id}`)}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Update
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
  );
};
