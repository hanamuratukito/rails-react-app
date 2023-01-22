import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo) => {
          return (
            <div key={todo.id} className="list-row">
              <li>{todo.text}</li>
              <button onClick={() => onClickComplete(todo.id)}>完了</button>
              <button onClick={() => onClickDelete(todo.id)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
