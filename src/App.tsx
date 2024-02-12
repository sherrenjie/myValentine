import { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 15;

  function handleYesClick() {
    setYesPressed(true);
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  const phrases = [
    "No :(",
    "Are you sure?",
    "Really? :(",
    "I will be really sad",
    "Don't do this to me",
    "How can you do this to me?",
    "I am going to cry",
    "You are going to break my hear",
    "Please no:(",
    "Think again, huh?",
    "You don't want my love? <3",
    "You sure?",
    "Please :(",
    "Are you sure?",
    "I will not do this",
    "Are you sure?",
  ];

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img className="yeay" src="src/assets/200w.gif" />
          <div className="t">YEAY!</div>
        </>
      ) : (
        <>
          <img
            className="kiss"
            src="src/assets/3ce884bb29ad1909a2c253354497420f.gif"
          />
          <div className="t">Will you be my valentine?</div>
          <div className="Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "#00FF00",
              }}
              onClick={handleYesClick}
            >
              YES
            </button>
            <button
              className="NoButton"
              style={{
                backgroundColor: "#FF3700",
              }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
