import React from 'react';

import '../styles/todoList.css';

export const TodoList = () => {
	return (
		<div className='todo-list_container'>
			<h2>Todo List</h2>

			<ul>
				<li>
					<p>
						<span>1.</span> Example
					</p>
					<div className='action-buttons'>
						<h5>Actions</h5>
						<button className='edit'>
							<i class='fas fa-edit'></i>
						</button>

						<button className='delete'>
							<i class='fas fa-trash-alt'></i>
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
};
