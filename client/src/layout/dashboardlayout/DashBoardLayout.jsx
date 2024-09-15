import React, { useEffect } from "react";
import "./dashboardlayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import ChatList from "../../components/chatlist/ChatList";
const DashBoardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
