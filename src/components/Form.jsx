import React from "react";
import { useState } from "react";

const Form = ({data,setData}) => {
      const [text, setText] = useState('')
  return (
    <form>
      <textarea
        placeholder="Введите текст"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <button
        onClick={(event) => {
          event.preventDefault();
          setData([...data, text]);
          setText("");
        }}
      >
        Добавить текст
      </button>
    </form>
  );
};

export default Form;
