import React from 'react';
import PropTypes from 'prop-types';

export const CompleteTodos = (props) => {
  const { completeTodos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo) => {
          return (
            <div key={todo.id} className="list-row">
              <li>{todo.text}</li>
              <button onClick={() => onClickback(todo.id)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

CompleteTodos.propTypes = {
  completeTodos: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClickback: PropTypes.string,
};
