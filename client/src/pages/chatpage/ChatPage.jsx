import React from "react";
import "./chatpage.css";
import NewPrompt from "../../components/newprompt/NewPrompt";
const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
