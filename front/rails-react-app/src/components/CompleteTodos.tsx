import * as React from 'react';
import { Button } from '@mui/material';

interface CompleteTodoInterface {
  completeTodos: CompleteTodosInfo[];
  onClickback: Function;
}

interface CompleteTodosInfo {
  id: number;
  text: string;
}

const CompleteTodos = (props: CompleteTodoInterface) => {
  const { completeTodos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo: CompleteTodosInfo) => (
          <div key={todo.id} className="list-row">
            <li>{todo.text}</li>
            <Button
              size="small"
              variant="contained"
              onClick={() => onClickback(todo.id)}
            >
              戻す
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTodos;
