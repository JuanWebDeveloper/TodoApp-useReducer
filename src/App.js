import React, { useEffect, useReducer } from 'react';

// Components
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

// Custom Hooks
import { useTodoReducer } from './hooks/useTodoReducer';
// Helpers
import { init } from './helpers/init';

import './styles/default.css';

const App = () => {
	const [todos, dispatch] = useReducer(useTodoReducer, [], init);

	useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);

	return (
		<div className='main-container'>
			<TodoAdd dispatch={dispatch} />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
