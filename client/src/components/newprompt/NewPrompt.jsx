import React, { useEffect, useRef } from "react";
import "./newprompt.css";
const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="endChat" ref={endRef}>
      <div className="newprompt">
        <form className="newForm">
          <label htmlFor="file">
            <img src="/attachment.png" alt="attachment" />
          </label>
          <input id="file" type="file" multiple={false} hidden />
          <input type="text" name="text" placeholder="Ask anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPrompt;
