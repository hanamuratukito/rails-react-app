import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickback(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
