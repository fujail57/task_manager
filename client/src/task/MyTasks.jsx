// import { useNavigate } from "react-router-dom";

// import { useAuth } from "../authConfig/AuthContext";
// import { useQuery } from "@tanstack/react-query";
// import { getApiQuery } from "../utils/apiQuery";
// import { Loading } from "../components/Loading";

// export const MyTasks = () => {
//   const { auth } = useAuth();
//   const navigate = useNavigate();
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["my-task"],
//     queryFn: () => getApiQuery("/my-task"),
//   });

//   console.log("DATA:", data);
//   console.log("isLoading:", isLoading);
//   console.log("isError:", isError);

//   if (isLoading)
//     return (
//       <div className="flex justify-center items-center min-h-300px">
//         <Loading />
//       </div>
//     );

//   if (isError)
//     return (
//       <div className="flex justify-center text-red-600">
//         Error: {error.message}
//       </div>
//     );

//   return (
//     <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-amber-50 gap-y-2.5 sm:gap-5 sm:px-12">
//       {data?.data?.map((task, index) => {
//         return (
//           <div className="border " key={index}>
//             <h2>{task.title}</h2>
//             <h5>{task.description}</h5>
//             <p>{task.status}</p>
//             <p>{task.owner}</p>
//             <button
//               onClick={() => navigate(`/task-update/${task._id}`)}
//               className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => navigate(`/task-view/${task._id}`)}
//               className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               View
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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

  console.log("DATA:", data);
  console.log("isLoading:", isLoading);
  console.log("isError:", isError);

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


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  """""""""""""""""""""""""""""""""""":::::::::::::::::::::::::::::::::::::::::::::::::

//  <div className="flex justify-center px-4">
//       <fieldset className="w-full max-w-6xl border border-gray-300 rounded-lg p-6">
//         {auth?.role === "user" && (
//           <button
//             onClick={() => navigate("/task-add")}
//             className="px-3 py-1 mb-5 bg-green-500 text-white rounded hover:bg-green-600"
//           >
//             Add new task
//           </button>
//         )}

//         <legend className="px-2 text-lg font-semibold text-gray-700">
//           My Task
//         </legend>

//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 text-sm text-center">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">Title</th>
//                 <th className="border px-4 py-2">Description</th>
//                 <th className="border px-4 py-2">Status</th>
//                 <th className="border px-4 py-2">Owner</th>
//                 <th className="border px-4 py-2">View</th>
//                 {auth?.role === "user" && (
//                   <th className="border px-4 py-2">Update</th>
//                 )}
//               </tr>
//             </thead>

//             <tbody>
//               {data?.data?.map((task, index) => {
//                 return (
//                   <tr key={index} className="hover:bg-gray-50 transition">
//                     <td className="border px-4 py-2">{task.title}</td>
//                     <td className="border px-4 py-2">{task.description}</td>

//                     <td className="border px-4 py-2 capitalize">
//                       {task.status}
//                     </td>
//                     <td className="border px-4 py-2">{task.owner}</td>

//                     <td className="border px-4 py-2">
//                       <button
//                         onClick={() => navigate(`/task-view/${task._id}`)}
//                         className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                       >
//                         View
//                       </button>
//                     </td>

//                     {auth.role === "user" && (
//                       <td className="border px-4 py-2">
//                         <button
//                           onClick={() => navigate(`/task-update/${task._id}`)}
//                           className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                         >
//                           Update
//                         </button>
//                       </td>
//                     )}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </fieldset>
//     </div>
