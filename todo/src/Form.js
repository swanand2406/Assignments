import React, { useState } from 'react';

const Form = (props) => {                      //props from TodoApp
 	const [todo, setTodo] = useState('');      //maintaining state for storing list of todos

	const handleSubmit = (e) => {             //submitting function
		e.preventDefault();
		const data = {
			id: props.lists[props.lists.length - 1],
			todo,
			completed: false,
		};

		props.handleChange(data);
		setTodo('');
	};
	const handleInput = () => {                //function for empty input
		if (todo == "") {
			alert("empty string")
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
					<button className="btn btn-primary" type="submit" onClick={handleInput}   >Add </button>       	{/* Add button to add todos */}
				</div>
			</form>
		</div>
	);
};

export default Form;