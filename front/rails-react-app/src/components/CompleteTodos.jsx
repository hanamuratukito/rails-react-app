import React from 'react';

export const CompleteTodos = (props) => {
  <div className="complete-area">
    <p className="title">完了のTODO</p>
    <ul>
      {props.completeTodos.forEach((todo) => {
        <div key={todo.id} className="list-row">
          <li>{todo.text}</li>
          <button type="button" onClick={() => props.onClickback(todo.id)}>
            戻す
          </button>
        </div>;
      })}
    </ul>
  </div>;
};

export default CompleteTodos;
