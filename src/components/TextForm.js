import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    // console.log("Uppercase was clicked" + text);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handledownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>

          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to LowerCase</button>
           
          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>

          <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handledownloadClick}>Download text</button>
        </div>
      </div>

      <div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>your text summery</h1>
          <p>
            {" "}
            {text.split(/\S+/).filter((element) => {return element.length!== 0}).length} words and {text.length} charcters
          </p>
          <p> {0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
