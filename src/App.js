import React from 'react';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

const App = () => {
	return (
		<div className='main-container'>
			<TodoAdd />
			<TodoList />
		</div>
	);
};

export default App;
