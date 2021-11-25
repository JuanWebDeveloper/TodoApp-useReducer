export const handleSubmit = (e, description, dispatch, reset) => {
	e.preventDefault();

	if (description.trim().length <= 5) {
		return;
	}

	const newTodo = {
		id: new Date().getTime(),
		description,
		done: false,
	};

	const action = {
		type: 'add',
		payload: newTodo,
	};

	dispatch(action);
	reset();
};
