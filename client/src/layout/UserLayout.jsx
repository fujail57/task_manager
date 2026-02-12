import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../authConfig/AuthContext";

export const UserLayout = () => {
  // const { auth } = useAuth();
  return (
    <div className="min-h-screen  ">
      {/* Navbar */}
      <header className="w-full ">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="w-full ">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
