import "./App.css";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import toType from "./toType";
var toTypeCmp = toType.split(" ");

let inputRef = React.createRef();
let wordCountRef = React.createRef();
let countResultRef = React.createRef();
let startBtnRef = React.createRef();

const getWordCount = (arr1) => {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === toTypeCmp[i]) {
      wordCountRef.current.style.color = "green";
      count++;
    } else {
      wordCountRef.current.style.color = "red";
      break;
    }
  }
  return count;
};

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [typed, setTyped] = useState([]);
  const [timer, setTimer] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const startTyping = () => {
    setWordCount(0);
    setTimer(60);
    inputRef.current.value = "";
    wordCountRef.current.style.display = "block";
    countResultRef.current.style.display = "none";
  };

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setDisabled(false);
        startBtnRef.current.style.display = "none";
      } else {
        setDisabled(true);
        startBtnRef.current.style.display = "block";
        countResultRef.current.style.display = "block";
        wordCountRef.current.style.display = "none";
      }
    }, 1000);
  });

  return (
    <div className="App">
      <button id="onstart" ref={startBtnRef} onClick={startTyping}>
        Start
      </button>
      <br />
      <h1>Time : {timer}</h1>
      <Input
        handleChange={(e) => {
          setTyped(e.target.value.split(" "));
          setWordCount(getWordCount(typed));
        }}
        disabler={disabled}
        inputRef={inputRef}
      />

      <h1 id="count" ref={wordCountRef}>
        {wordCount}
      </h1>
      <h1 id="speedResult" ref={countResultRef}>
        Your Typing Speed is {wordCount} WPM
      </h1>
      <div className="toTypeCont">
        <p className="toType">{toType}</p>
      </div>
      <p className="copy">Typeest &copy; Yvan I. SUGIRA 2022</p>
    </div>
  );
}

export default App;
