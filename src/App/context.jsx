import { createContext, useEffect, useRef, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
	const [value, setValue] = useState({
		text: "",
		todos: [],
	});

	useEffect(() => {
		if (value.todos.length) {
			localStorage.setItem("todos", JSON.stringify(value.todos));
		}
	}, [value]);

	useEffect(() => {
		const SavedTodos = JSON.parse(localStorage.getItem("todos"));
		setValue((v) => ({ ...v, todos: SavedTodos }));
	}, []);

	return (
		<Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
	);
};

export default Context;
