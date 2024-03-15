import './App.css';
import { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		// Load todos from local storage when the component mounts
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []); // Only run this effect once, on mount

	useEffect(() => {
		// Save todos to local storage whenever the todos state changes
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]); // Run this effect whenever todos changes

	const addTodo = () => {
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	const complete = (text) => {
		const uncumpletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncumpletedTodos);
	};

	return (
		<>
			<div className="App">
				<img className="logo" src="/logo.png" alt="techover" />
				<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
				<List todos={todos} complete={complete} />
			</div>
		</>
	);
}

export default App;
