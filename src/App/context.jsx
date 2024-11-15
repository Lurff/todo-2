import { createContext, useEffect, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
	const [value, setValue] = useState({
		text: "",
		todos: [],
	});

	useEffect(() => {
		try {
			const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
			if (Array.isArray(savedTodos)) {
				setValue((v) => ({ ...v, todos: savedTodos }));
			}
		} catch (error) {
			console.error("Error loading todos from localStorage:", error);
		}
	}, []);

	useEffect(() => {
		if (Array.isArray(value.todos)) {
			localStorage.setItem("todos", JSON.stringify(value.todos));
		}
	}, [value.todos]);

	return (
		<Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
	);
};

export default Context;
