import React from "react";
import "../styles.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <>
      <div className="input-area">
        <input
          disabled={disabled}
          className="input"
          placeholder="TODOを入力する"
          value={todoText}
          onChange={onChange}
        ></input>
        <button disabled={disabled} onClick={onClick} className="button">
          追加
        </button>
      </div>
    </>
  );
};
