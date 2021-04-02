import React from "react";
import "../styles.css";

export const CompleteTodo = (props) => {
  const {
    completeTodos,
    onClickMove,
    fromTodo,
    setFromTodo,
    toTodo,
    setToTodo
  } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            // Mapを使う際に必ず、keyが必要となる。なぜなら仮想DOMは変更した箇所のみ更新するから
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                {/**                <button onClick={() => onClickBack(index)} className="button"> */}
                <button
                  onClick={() =>
                    onClickMove(fromTodo, setFromTodo, toTodo, setToTodo, index)
                  }
                  className="button"
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
