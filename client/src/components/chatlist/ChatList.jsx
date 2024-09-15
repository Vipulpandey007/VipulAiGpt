import React from "react";
import "./chatlist.css";
import { Link } from "react-router-dom";
const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore VIPULAI GPT</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {/* {isPending
      ? "Loading..."
      : error
      ? "Something went wrong!"
      : data?.map((chat) => (
          <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
            {chat.title}
          </Link>
        ))} */}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to VIPULAI GPT Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
