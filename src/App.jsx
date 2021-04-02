import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  // 入力のstate情報
  const [todoText, setTodoText] = useState("");

  // inputから値を取得する場合、以下のようにstate管理で実施する{event.target.value}は標準
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 未完了のstate情報
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のstate情報
  const [completeTodos, setCompleteTodos] = useState([]);

  // 追加ボタンを押下したときの処理
  const onClickAdd = () => {
    // 値が未入力とき、処理をさせたくない場合以下の１行を記載すればOK
    if (todoText === "") return;

    // 「未完了Todo」にある内容と追加された内容を繋げて、新たに設定しなおす
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);

    // 入力領域をクリアする
    setTodoText("");
  };

  // 削除ボタンを押下したときに、押下した位置のTODOを削除する
  const onClickDelete = (index) => {
    // 現在のみ未完了TODOを取得
    const newTodo = [...incompleteTodos];

    // 引数で渡された位置の情報を１件だけ削除する
    newTodo.splice(index, 1);

    // 削除した残りの未完了一覧を再度設定し直す
    setIncompleteTodos(newTodo);
  };

  // 追加ボタン押下したときに、未完了のTODOから削除し、完了のTODOへ追加する
  const onClickComplete = (index) => {
    // 現在のみ未完了TODOを取得
    const newIncompleteTodo = [...incompleteTodos];

    // 未完了TODOから引数で渡された位置の情報を１件だけ削除する
    newIncompleteTodo.splice(index, 1);

    // 削除した残りの未完了一覧を再度設定し直す
    setIncompleteTodos(newIncompleteTodo);

    // 完了のTODOに未完了のTODOからで完了を選択された情報を完了のTODOに結合する
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];

    // 完了TODO一覧を再度設定し直す
    setCompleteTodos(newCompleteTodo);
  };

  // 戻すボタンを押下したときに、完了のTODOから削除し、未完了のTODOへ追加する
  const onClickBack = (index) => {
    // 現在のみ完了TODOを取得
    const newCompleteTodo = [...completeTodos];

    // 完了TODOから引数で渡された位置の情報を１件だけ削除する
    newCompleteTodo.splice(index, 1);

    // 削除した残りの完了一覧を再度設定し直す
    setCompleteTodos(newCompleteTodo);

    // 未完了のTODOに完了のTODOからで戻すを選択された情報を未完了のTODOに結合する
    const newInCompleteTodo = [...incompleteTodos, completeTodos[index]];

    // 未完了TODO一覧を再度設定し直す
    setIncompleteTodos(newInCompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
