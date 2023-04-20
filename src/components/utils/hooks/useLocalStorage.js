import { useState, useEffect } from 'react';

// The key parameter is the key used to store the data in local storage
// InitialValue parameter is the default value to use if the key is not found in local storage.
export const useLocalStorage = (key, initialValue = []) => {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return { value, setValue };
};
