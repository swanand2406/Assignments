import React, { useState } from 'react';

const Form = (props) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.lists[props.lists.length - 1],
      todo,
      completed: false,
    };

    props.handleChange(data);
    setTodo('');
  };
 const handleInput = () => {
    if(todo==""){
      alert("empty")
    }
  }
  return (
    <div className="main">
      <form className="AddForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mx-2"
            name="todo"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" onClick={handleInput}   >Add </button>
        </div>
      </form>
    </div>
  );
};

export default Form;