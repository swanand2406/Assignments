import React from 'react';

const TodoList = (props) => {
  const { lists } = props;                           //props from TodoApp
  return (
    <div className="todoList">
      {lists.map((list) => (
        <div
          className="list d-flex align-items-center justify-content-center p-0"
          key={list.id}>
          {list.completed ? (
            <React.Fragment>
              <p
                className="font-weight-bold mt-3 text-center"
                style={{ textDecoration: 'line-through' }}>
                {list.todo}
              </p>
              <i
                className="fa fa-trash text-danger"
                aria-hidden="true"
                style={{ cursor: 'Pointer' }}
                onClick={() => props.handleDelete(list.id)}></i>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input
                className="chk"
                type="checkbox"
                onClick={() => props.handleClick(list.id)}
              />
              <p className="font-weight-bold mt-3 text-center">{list.todo}</p>
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;