import React, { useReducer } from 'react';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

import { useTodoReducer } from './hooks/useTodoReducer';

import './styles/default.css';

const App = () => {
	const [todos, dispatch] = useReducer(useTodoReducer, []);
	return (
		<div className='main-container'>
			<TodoAdd />
			<TodoList />
		</div>
	);
};

export default App;
