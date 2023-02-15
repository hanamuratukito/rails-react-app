import * as React from 'react';
import { Button } from '@mui/material';

const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
};

interface InputTodoInterface {
  todoText: string;
  onChangeTodoText: React.ChangeEventHandler<HTMLInputElement>;
  onClickAdd: React.MouseEventHandler<HTMLButtonElement>;
}

const InputTodo = (props: InputTodoInterface) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <Button
        size="small"
        onClick={onClickAdd}
        variant="contained"
        disabled={todoText === ''}
      >
        追加
      </Button>
    </div>
  );
};

export default InputTodo;
