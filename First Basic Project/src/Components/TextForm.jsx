import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const textareaStyles = {
    height: "200px",
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLower = () => {
    setText(text.toLowerCase());
  };

  const handleCopyClick = () => {
    if (textareaRef.current) {
      navigator.clipboard
        .writeText(textareaRef.current.value)
        .then(() => {
          alert("Text copied to clipboard");
        })
        .catch((err) => {
          alert("Failed to copy text");
          console.error("Could not copy text: ", err);
        });
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className={`container ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div className="form-floating mx-2 h-25">
          <textarea
            ref={textareaRef}
            className="form-control mt-5"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={text}
            style={textareaStyles}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttons-div m-1">
          <button
            type="button"
            className="btn btn-outline-primary mx-2"
            onClick={handleUppercase}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-2"
            onClick={handleLower}
          >
            Lowercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-2"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-2"
            onClick={handleClear}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className={`container ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <p>
          <strong>{text.length}</strong> Characters and{" "}
          <strong>{text.split(/\s+/).filter((word) => word).length}</strong>{" "}
          Words
        </p>
        <h1>Preview Text</h1>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
