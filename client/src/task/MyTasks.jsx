import { useNavigate } from "react-router-dom";
import { useAuth } from "../authConfig/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getApiQuery } from "../utils/apiQuery";
import { Loading } from "../components/Loading";

export const MyTasks = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["my-task"],
    queryFn: () => getApiQuery("/my-task"),
  });

  // console.log("DATA:", data);
  // console.log("isLoading:", isLoading);
  // console.log("isError:", isError);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-red-600 text-sm font-medium bg-red-50 px-4 py-2 rounded-md shadow-sm">
          Error: {error.message}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.data?.map((task, index) => {
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition duration-200"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>

                <h5 className="text-sm text-gray-600 line-clamp-3">
                  {task.description}
                </h5>

                <div className="text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-700">Status:</span>{" "}
                    {task.status}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Owner:</span>{" "}
                    {task.owner}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => navigate(`/task-update/${task._id}`)}
                  className="flex-1 text-sm px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                >
                  Update
                </button>

                <button
                  onClick={() => navigate(`/task-view/${task._id}`)}
                  className="flex-1 text-sm px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
