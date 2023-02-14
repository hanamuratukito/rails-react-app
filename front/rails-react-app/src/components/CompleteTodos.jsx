import React from 'react';

const CompleteTodos = (props) => {
  const { completeTodos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo) => (
          <div key={todo.id} className="list-row">
            <li>{todo.text}</li>
            <button type="button" onClick={() => onClickback(todo.id)}>戻す</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTodos;
