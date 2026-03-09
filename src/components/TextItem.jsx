import React from "react";
import { useState } from "react";

const TextItem = ({ el }) => {
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("green");
  const [fontWeight, setFontWeight] = useState(400);
  const [backgroundColor, setBackgroundColor] = useState('black')

  function changeFontWeight() {
    if (fontWeight === 400) {
      setFontWeight(800);
    } else {
      setFontWeight(400);
    }
  }
  function incrementSize() {
    setFontSize(fontSize + 2);
  }
  function decrementSize() {
    if (fontSize >= 8) {
      setFontSize(fontSize - 2);
    }
  }
  return (
    <div className="note-container">
      <p
        className="font-p"
        style={{
          fontSize: fontSize + "px",
          color: fontColor,
          fontWeight: fontWeight,
          backgroundColor: backgroundColor,
        }}
      >
        {el}
      </p>

      <div className="note-flex">
        <div className="size-flex">
          <button onClick={incrementSize}>+</button>
          <p className="actual-font">{fontSize}</p>
          <button onClick={decrementSize}>-</button>
        </div>

        <div className="size-flex">
          <p className="note-p">Цвет шрифта:</p>
          <input
            onChange={function (event) {
              setFontColor(event.target.value);
            }}
            value={fontColor}
            type="color"
          ></input>
        </div>

        <div className="size-flex">
          <p className="note-p">Цвет фона:</p>
          <input
            onChange={function (event) {
              setBackgroundColor(event.target.value);
            }}
            value={backgroundColor}
            type="color"
          ></input>
        </div>

        <div>
          <button onClick={changeFontWeight}>
            B
            {/* <img src="../images/bold-solid-full.svg" alt="bold-icon"></img> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
