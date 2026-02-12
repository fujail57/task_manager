import { Link } from "react-router-dom";
import { useAuth } from "../authConfig/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { auth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-semibold text-gray-800">
            Task Manager
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-black transition">
              About
            </Link>
            {/* <Link to="/profile" className="hover:text-black transition">
              Profile
            </Link>
            {auth.role === "admin" ? (
              <Link to="/tasks" className="hover:text-black transition">
                All Task
              </Link>
            ) : (
              ""
            )}
            <Link to="/my-task" className="hover:text-black transition">
              My Task
            </Link>
            <Link to="/task-add" className="hover:text-black transition">
              Add Task
            </Link> */}

            {auth.isAuth === false ? (
              <div className="flex space-x-3">
                <Link to="/login" className="hover:text-black transition">
                  Login
                </Link>
                <Link to="/register" className="hover:text-black transition">
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex space-x-6">
                <Link to="/profile" className="hover:text-black transition">
                  Profile
                </Link>
                {auth.role === "admin" ? (
                  <Link to="/tasks" className="hover:text-black transition">
                    All Task
                  </Link>
                ) : (
                  ""
                )}
                <Link to="/my-task" className="hover:text-black transition">
                  My Task
                </Link>
                <Link to="/task-add" className="hover:text-black transition">
                  Add Task
                </Link>
                <Link to="/logout" className="hover:text-black transition">
                  Logout
                </Link>
              </div>
            )}

            {/* <Link to="/login" className="hover:text-black transition">
              Login
            </Link> */}
            {/* <Link to="/register" className="hover:text-black transition">
              Register
            </Link> */}
            {/* <Link to="/logout" className="hover:text-black transition">
              Logout
            </Link> */}
          </div>

          {/* Hamburger Button */}
          <button
            className="sm:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 py-4 text-sm font-medium text-gray-700 border-t border-gray-200">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-black transition">
              About
            </Link>
            {/* <Link to="/profile" className="hover:text-black transition">
              Profile
            </Link>
            {auth.role === "admin" ? (
              <Link to="/tasks" className="hover:text-black transition">
                All Task
              </Link>
            ) : (
              ""
            )}
            <Link to="/my-task" className="hover:text-black transition">
              My Task
            </Link>
            <Link to="/task-add" className="hover:text-black transition">
              Add Task
            </Link> */}

            {auth.isAuth === false ? (
              <div className="flex flex-col space-y-3">
                <Link to="/login" className="hover:text-black transition">
                  Login
                </Link>
                <Link to="/register" className="hover:text-black transition">
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link to="/profile" className="hover:text-black transition">
                  Profile
                </Link>
                {auth.role === "admin" ? (
                  <Link to="/tasks" className="hover:text-black transition">
                    All Task
                  </Link>
                ) : (
                  ""
                )}
                <Link to="/my-task" className="hover:text-black transition">
                  My Task
                </Link>
                <Link to="/task-add" className="hover:text-black transition">
                  Add Task
                </Link>
                <Link to="/logout" className="hover:text-black transition">
                  Logout
                </Link>
              </div>
            )}

            {/* <Link to="/login" className="hover:text-black transition">
              Login
            </Link>
            <Link to="/register" className="hover:text-black transition">
              Register
            </Link>
            <Link to="/logout" className="hover:text-black transition">
              Logout
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
