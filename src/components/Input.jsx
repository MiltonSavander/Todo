import './Input.css';

const Input = ({ setTodo, todo, addTodo }) => {
	const handleKeyPress = (event) => {
		if (event.key == 'Enter') {
			addTodo();
		}
	};

	return (
		<div className="input-wrapper">
			<input
				type="text"
				name="todo"
				placeholder="create a todo"
				onChange={(event) => setTodo(event.target.value)}
				className="input"
				value={todo}
				onKeyDown={handleKeyPress}
			/>
			<button className="add-button" onClick={addTodo}>
				Add
			</button>
		</div>
	);
};

export default Input;
