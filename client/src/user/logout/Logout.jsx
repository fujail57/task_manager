import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../../authConfig/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const Logout = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axiosInstance.post("/logout");

        // Clear auth state
        auth.user === null;

        // Redirect to login page
        navigate("/login");
        // alert("Loged out successfully");
      } catch (error) {
        console.error("Logout failed:", error);
        alert(error.response?.data?.message || "Failed to logout");
      }
    };

    handleLogout();
  }, [navigate, AuthProvider]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600 text-sm">Logging out...</p>
    </div>
  );
};

export default Logout;
