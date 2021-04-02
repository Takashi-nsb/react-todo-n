import React from "react";
import "../styles.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <>
      <div className="input_area">
        <input
          className="input"
          placeholder="TODOを入力する"
          value={todoText}
          onChange={onChange}
        ></input>
        <button onClick={onClick} className="button">
          追加
        </button>
      </div>
    </>
  );
};
