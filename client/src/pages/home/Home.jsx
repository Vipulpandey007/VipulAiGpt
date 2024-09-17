import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>VIPULAI GPT</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Solution to all Your Problems. You can find all the answers of your
          questions. Built with the help of Google Gemini.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Vipul:You can find all your answers",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:VipulAI GPT is the best",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Pandey:Find your answers",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We reply with best answers",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
