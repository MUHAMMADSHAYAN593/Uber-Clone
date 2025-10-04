import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Logout successful");
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.warn("Token already invalid, proceeding to logout...");
        } else {
          console.error("Logout failed:", error.response?.data || error.message);
        }
      }

      finally {
        // always clear token even if request fails
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    if (token) {
      logoutUser();
    } else {
      navigate("/login"); // already logged out
    }
  }, [token, navigate]);

  return <div>Logging you out...</div>;
};

export default UserLogout;
