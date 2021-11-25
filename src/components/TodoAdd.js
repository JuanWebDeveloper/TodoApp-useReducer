import React from 'react';

import '../styles/todoAdd.css';

export const TodoAdd = () => {
	return (
		<div className='form-container'>
			<h2>Add Todo</h2>

			<form>
				<input type='text' name='description' placeholder='Add Description' autoComplete='off' />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};
