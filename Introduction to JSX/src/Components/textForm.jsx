import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function upperCaseConvert() {
    setText(text.toUpperCase());
  }

  return (
    <>
      <div className="container">
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea2"
            rows="8"
            value={text}
            placeholder="Type here"
            onChange={handleChange}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary"
            onClick={upperCaseConvert}
          >
            Uppercase
          </button>
        </div>
      </div>
      <div className="container">
        <div>
          {text.length} Characters and {text.split(" ").filter(Boolean).length} words
        </div>
      </div>
    </>
  );
}
