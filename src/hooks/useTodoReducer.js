export const useTodoReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];

		case 'complete':
			return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));

		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);

		default:
			return state;
	}
};
