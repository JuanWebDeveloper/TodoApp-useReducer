export const handleComplete = (id, dispatch) => {
	const action = {
		type: 'complete',
		payload: id,
	};

	dispatch(action);
};
