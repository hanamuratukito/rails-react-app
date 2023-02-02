import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/todos/getTodo');
      setIncompleteTodos(res.data.incompleteTodos);
      setCompleteTodos(res.data.completeTodos);

      console.log(res);
    })();
  }, []);

  // TODO入力を管理する変数
  const [todoText, setTodoText] = useState('');

  // 未完了のTODOを管理する変数
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODOを管理する変数
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押下時の処理
  const onClickAdd = async () => {
    if (todoText === '') return;
    const res = await axios.post('http://localhost:3001/todos/addTodo', {
      text: todoText,
    });
    setIncompleteTodos(res.data.incompleteTodos);

    setTodoText('');
    console.log(res);
  };

  // 削除ボタン押下時の処理
  const onClickDelete = async (id) => {
    const res = await axios.post('http://localhost:3001/todos/deleteTodo', {
      id: id,
    });
    setIncompleteTodos(res.data.incompleteTodos);
  };

  // 完了ボタン押下時の処理
  const onClickComplete = async (id) => {
    const res = await axios.post('http://localhost:3001/todos/updateTodo', {
      id: id,
      status: 2,
    });
    setIncompleteTodos(res.data.incompleteTodos);
    setCompleteTodos(res.data.completeTodos);
  };

  // 戻るボタン押下時の処理
  const onClickback = async (id) => {
    const res = await axios.post('http://localhost:3001/todos/updateTodo', {
      id: id,
      status: 1,
    });
    setIncompleteTodos(res.data.incompleteTodos);
    setCompleteTodos(res.data.completeTodos);
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
