export const handleSubmit = (e, values, reset) => {
	e.preventDefault();

	console.log(values);
	reset();
};
