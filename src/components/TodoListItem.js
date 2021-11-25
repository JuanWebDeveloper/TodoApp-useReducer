import React from 'react';

// Helpers
import { handleComplete } from '../helpers/handleComplete';
import { handleDelete } from '../helpers/handleDelete';

export const TodoListItem = ({ todo, index, dispatch }) => {
	return (
		<li>
			<p className={`${todo.done && 'complete'} `}>
				<span>{index + 1}.</span> {todo.description}
			</p>
			<div className='action-buttons'>
				<h5>Actions</h5>
				<button className='complete' onClick={() => handleComplete(todo.id, dispatch)}>
					<i className='far fa-check-square'></i>
				</button>

				<button className='delete' onClick={() => handleDelete(todo.id, dispatch)}>
					<i className='fas fa-trash-alt'></i>
				</button>
			</div>
		</li>
	);
};
