import React from "react";
import { useState } from "react";

const TextItem = ({ el }) => {
  const [fontSize, setFontSize] = useState(18);
  const [fontColor, setFontColor] = useState("#004d40");
  const [fontWeight, setFontWeight] = useState(400);
  const [makeItalic, setMakeItalic] = useState('normal')
  const [underline, setUnderline] = useState('auto')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [textAlign, setTextAlign] = useState('left')

  function changeFontWeight() {
    if (fontWeight === 400) {
      setFontWeight(800);
    } else {
      setFontWeight(400);
    }
  }
  function changeItalic() {
    if(makeItalic === 'normal') {
      setMakeItalic('italic')
    } else {
      setMakeItalic('normal')
    }
  }
  function makeUnderline(){
      if(underline === 'auto') {
     setUnderline('underline')
    } else {
      setUnderline('auto')
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
  
  const styles = {
          fontSize: fontSize + "px",
          color: fontColor,
          fontWeight: fontWeight,
          textDecoration: underline,
          backgroundColor: backgroundColor,
          textAlign:textAlign,
          fontStyle:makeItalic
        }
  return (
    <div className="note-container">
      <p
        className="font-p"
        style={styles}
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

        <div className="icon-flex">
          <button className="icon" onClick={changeFontWeight}>
            <img src={process.env.PUBLIC_URL + "/images/bold-solid-full.svg"} alt="bold-icon"></img>
          </button>
           <button className="icon" onClick={changeItalic}>
            <img src="./images/italic-solid-full.svg" alt="italic-icon"></img>
          </button>
           <button className="icon" onClick={makeUnderline}>
            <img src="./images/underline-solid-full.svg" alt="underline-icon"></img>
          </button>
        </div>

        <div className="size-flex">
          <p className="note-p">Центрировать текст </p>
          <select onChange={function(event) {
            setTextAlign(event.target.value)
          }} value={textAlign}>
            <option value='left'>по левой стороне</option>
            <option value='center'>по центру</option>
            <option value='right'>по правой стороне</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
