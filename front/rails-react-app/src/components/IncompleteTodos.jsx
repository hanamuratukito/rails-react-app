import React from 'react';

export const IncompleteTodos = (props) => {
  <div className="incomplete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      {props.incompleteTodos.forEach((todo) => {
        <div key={todo.id} className="list-row">
          <li>{todo.text}</li>
          <button type="button" onClick={() => props.onClickComplete(todo.id)}>
            完了
          </button>
          <button type="button" onClick={() => props.onClickDelete(todo.id)}>
            削除
          </button>
        </div>;
      })}
    </ul>
  </div>;
};

export default IncompleteTodos;
