import * as React from 'react';

interface IncompleteTodoInterface {
  incompleteTodos: IncompleteTodosInfo[];
  onClickComplete: Function;
  onClickDelete: Function;
}

interface IncompleteTodosInfo {
  id: number;
  text: string;
}

const IncompleteTodos = (props: IncompleteTodoInterface) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo: IncompleteTodosInfo) => (
          <div key={todo.id} className="list-row">
            <li>{todo.text}</li>
            <button type="button" onClick={() => onClickComplete(todo.id)}>完了</button>
            <button type="button" onClick={() => onClickDelete(todo.id)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
