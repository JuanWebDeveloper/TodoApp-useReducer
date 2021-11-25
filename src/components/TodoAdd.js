import React from 'react';

export const TodoAdd = () => {
	return (
		<div className='form-container'>
			<h2>Add Todo</h2>
			<hr />

			<form>
				<input type='text' name='description' autoComplete='off' />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};
