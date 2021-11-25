import React from 'react';

export const TodoList = () => {
	return (
		<div className='todo-list_container'>
			<h2>Todo List</h2>
			<hr />

			<ul>
				<li>
					<p>1. Example</p>
					<div className='action-buttons'>
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
