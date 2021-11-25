import React from 'react';

export const TodoListItem = ({ todo, index }) => {
	return (
		<li>
			<p>
				<span>{index + 1}.</span> {todo.description}
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
	);
};
