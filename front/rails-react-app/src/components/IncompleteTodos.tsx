import * as React from 'react';
import { Button } from '@mui/material';

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
            <Button
              size="small"
              variant="contained"
              onClick={() => onClickComplete(todo.id)}
            >
              完了
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => onClickDelete(todo.id)}
            >
              削除
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
