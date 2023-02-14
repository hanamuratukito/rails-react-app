import axios from 'axios';
import * as React from 'react';
import './styles.css';
import InputTodo from './components/InputTodo';
import IncompleteTodos from './components/IncompleteTodos';
import CompleteTodos from './components/CompleteTodos';

export const App = () => {
  // TODO入力を管理する変数
  const [todoText, setTodoText] = React.useState('');

  // 未完了のTODOを管理する変数
  const [incompleteTodos, setIncompleteTodos] = React.useState([]);

  // 完了のTODOを管理する変数
  const [completeTodos, setCompleteTodos] = React.useState([]);

  const onChangeTodoText = (event: any) => setTodoText(event?.target.value);

  React.useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/todos/getTodo');
      setIncompleteTodos(res.data.incompleteTodos);
      setCompleteTodos(res.data.completeTodos);
    })();
  }, []);

  // 追加ボタン押下時の処理
  const onClickAdd = async () => {
    if (todoText === '') return;
    const res = await axios.post('http://localhost:3001/todos/addTodo', {
      text: todoText,
    });
    setIncompleteTodos(res.data.incompleteTodos);

    setTodoText('');
  };

  // 削除ボタン押下時の処理
  const onClickDelete = async (id: number) => {
    const res = await axios.post('http://localhost:3001/todos/deleteTodo', {
      id,
    });
    setIncompleteTodos(res.data.incompleteTodos);
  };

  // 完了ボタン押下時の処理
  const onClickComplete = async (id: number) => {
    const res = await axios.post('http://localhost:3001/todos/updateTodo', {
      id,
      status: 2,
    });
    setIncompleteTodos(res.data.incompleteTodos);
    setCompleteTodos(res.data.completeTodos);
  };

  // 戻るボタン押下時の処理
  const onClickback = async (id: number) => {
    const res = await axios.post('http://localhost:3001/todos/updateTodo', {
      id,
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

export default App;
