import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  useEffect(()=>{
    (async () => {
      const res = await axios.get('http://localhost:3001/todos/getTodo');
    
      console.log(res);
    })()
  },[])

  // TODO入力を管理する変数　
  const [todoText, setTodoText] = useState("");

  // 未完了のTODOを管理する変数
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODOを管理する変数
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押下時の処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン押下時の処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン押下時の処理
  const onClickComplete = (index) => {
    // 未完了項目を更新
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    // 完了項目を更新
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻るボタン押下時の処理
  const onClickback = (index) => {
    // 完了項目を更新
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    // 未完了項目を更新
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickback={onClickback} />
    </>
  );
};
