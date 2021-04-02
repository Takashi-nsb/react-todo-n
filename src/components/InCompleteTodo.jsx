import React from "react";
import "../styles.css";

export const InCompleteTodo = (porps) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = porps;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            // Mapを使用したときの選択位置の特定には、indexを使用する
            // Mapを使う際に必ず、keyが必要となる。なぜなら仮想DOMは変更した箇所のみ更新するから
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => onClickComplete(index)}
                  className="button"
                >
                  完了
                </button>
                <button onClick={() => onClickDelete(index)} className="button">
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
