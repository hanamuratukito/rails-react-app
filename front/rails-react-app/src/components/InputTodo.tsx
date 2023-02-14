import * as React from 'react';

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
  onClickAdd: React.MouseEventHandler<HTMLButtonElement>
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
      <button type="button" onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
