import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "中村歩加",
    "村山彩希",
    "坂口渚沙"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "斎藤飛鳥",
    "白石麻衣",
    "星野みなみ"
  ]);
  const [todoText, setTodoText] = useState("");

  // inputから値を取得する場合、以下のようにstate管理で実施する{event.target.value}は標準
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    alert(newTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          className="input"
          placeholder="TODOを入力する"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd} className="button">
          追加
        </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            // Mapを使う際に必ず、keyが必要となる。なぜなら仮想DOMは変更した箇所のみ更新するから
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button className="button">完了</button>
                <button className="button">削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            // Mapを使う際に必ず、keyが必要となる。なぜなら仮想DOMは変更した箇所のみ更新するから
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button className="button">戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
