import { createBrowserRouter, RouterProvider } from "react-router-dom";
// :::: COMMON ::::
import { UserLogin } from "./user/login/UserLogin";
import { UserRegister } from "./user/register/UserRegister";

import { PageNotFound } from "./components/PageNotFound";
import { ProtectedRoute } from "./authConfig/ProtectedRoute";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { PublicLayout } from "./layout/PublicLayout";
import { Unauthorized } from "./components/Unauthorized";

import { UserLayout } from "./layout/userLayout";
import { Profile } from "./user/profile/Profile";
import { MyTasks } from "./task/MyTasks";
import { ViewTask } from "./task/ViewTask";
import { AddTask } from "./task/AddTask";
import { UpdateTask } from "./task/UpdateTask";
import { TaskList } from "./task/TaskList";
import { AdminLayout } from "./layout/AdminLayout";
import Logout from "./user/logout/Logout";

// ::::::::::::::::::::::::::::::::: ROUTER :::::::::::::::::::::::::::::::

const routes = createBrowserRouter([
  // :::: Public Route ::::
  {
    element: <PublicLayout />,
    children: [
      { path: "/register", element: <UserRegister /> },
      { path: "/login", element: <UserLogin /> },
      { path: "/logout", element: <Logout /> },
      { path: "/unauthorized", element: <Unauthorized /> },

      // :::
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },

  // ::::::::admin / agent :::::::::::::
  {
    element: <ProtectedRoute allowedRoles={["user"]} />,
    children: [
      {
        element: <UserLayout />,
        children: [
          { path: "/profile", element: <Profile /> },
          { path: "/my-task", element: <MyTasks /> },
          { path: "/task-add", element: <AddTask /> },
          { path: "/task-view/:id", element: <ViewTask /> },
          { path: "/task-update/:id", element: <UpdateTask /> },
        ],
      },
    ],
  },

  // ::::::::admin :::::::::::::
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [{ path: "/tasks", element: <TaskList /> }],
      },
    ],
  },

  // :::: COMMON ::::
  { path: "*", element: <PageNotFound /> },
]);

export const Router = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};
