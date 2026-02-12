import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full  text-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
