import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		const NameOfTheInputToChange = target.name;
		const ValueOfTheInputToChange = target.value;

		setFormValues({
			...formValues,
			[NameOfTheInputToChange]: ValueOfTheInputToChange,
		});
	};

	const reset = () => setFormValues(initialState);

	return { formValues, handleInputChange, reset };
};
