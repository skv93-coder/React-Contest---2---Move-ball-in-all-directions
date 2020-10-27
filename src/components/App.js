import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position: "fixed"
  });
  const reset = () => {
    setRenderBall(false);
  };
  const start = () => {
    setRenderBall(true);
  };
  const keydownHandler = (ev) => {
    if (ev.key === "ArrowLeft") {
      setX(x + 5);
      let copyBall = { ...ballPosition };
      copyBall.left = x + 5 + "px";
      console.log(copyBall);
      setBallPosition(copyBall);
    } else if (ev.key === "ArrowRight") {
      setX(x - 5);
      let copyBall = { ...ballPosition };
      copyBall.left = x - 5 + "px";
      console.log(copyBall);
      setBallPosition(copyBall);
    } else if (ev.key === "ArrowUp") {
      setY(y + 5);
      let copyBall = { ...ballPosition };
      copyBall.top = y + 5 + "px";
      console.log(copyBall, ev.key);
      setBallPosition(copyBall);
    } else if (ev.key === "ArrowDown") {
      setY(y - 5);
      let copyBall = { ...ballPosition };
      copyBall.top = y - 5 + "px";

      console.log(copyBall);
      setBallPosition(copyBall);
    }
  };
  const renderChoice = () => {};
  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
      // console.log(7);
    };
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderBall ? (
        <div className="ball"></div>
      ) : (
        <button onClick={start} className="startt">
          start
        </button>
      )}
      {renderChoice()}
    </div>
  );
};

export default App;
