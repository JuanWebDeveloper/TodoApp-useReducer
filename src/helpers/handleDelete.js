export const handleDelete = (id, dispatch) => {
	const action = {
		type: 'delete',
		payload: id,
	};

	dispatch(action);
};
