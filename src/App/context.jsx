import { createContext, useEffect, useRef, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
	const [value, setValue] = useState({
		text: "",
		todos: [],
	});

	useEffect(() => {
		const Todos = value.todos;
		console.log(Todos);
		localStorage.setItem("todos", JSON.stringify(Todos));
	}, [value.todos]);

	return (
		<Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
	);
};

export default Context;
