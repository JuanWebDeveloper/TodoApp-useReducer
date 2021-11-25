import React from 'react';

import { TodoListItem } from './TodoListItem';

import '../styles/todoList.css';

export const TodoList = ({ todos }) => {
	return (
		<div className='todo-list_container'>
			<h2>Todo List</h2>

			<ul>
				{todos.map((todo, i) => (
					<TodoListItem key={todo.id} todo={todo} index={i} />
				))}
			</ul>
		</div>
	);
};
