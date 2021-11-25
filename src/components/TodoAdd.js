import React from 'react';

// Custom Hooks
import { useForm } from '../hooks/useForm';
// Helpers
import { handleSubmit } from '../helpers/handleSubmit';

import '../styles/todoAdd.css';

export const TodoAdd = ({ dispatch }) => {
	const { formValues, handleInputChange, reset } = useForm({ description: '' });

	const { description } = formValues;

	return (
		<div className='form-container'>
			<h2>Add Todo</h2>

			<form onSubmit={(e) => handleSubmit(e, description, dispatch, reset)}>
				<input type='text' name='description' placeholder='Add Description' autoComplete='off' value={description} onChange={handleInputChange} />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};
