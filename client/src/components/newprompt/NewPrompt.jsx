import React, { useEffect, useRef, useState } from "react";
import "./newprompt.css";
import Upload from "../upload/upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const endRef = useRef(null);
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img.dbData]);

  const add = async (text) => {
    setQuestion(text);
    const result = await model.generateContent(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    const response = await result.response;
    setAnswer(response.text());
    setImg({ isLoading: false, error: "", dbData: {}, aiData: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    add(text, false);
  };

  return (
    <>
      {img.isLoading && <div className="">Image Uploading....</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}>
        <form className="newForm" onSubmit={handleSubmit}>
          <Upload setImg={setImg} />
          <input id="file" type="file" multiple={false} hidden />
          <input type="text" name="text" placeholder="Ask anything..." />
          <button>
            <img src="/arrow.png" alt="upload" />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
