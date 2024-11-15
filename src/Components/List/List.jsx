import React, { useContext } from "react";
import Context from "../../App/context";
import Todo from "./Todo/Todo";

import "./List.css";

const List = () => {
	const { value } = useContext(Context);

	return (
		<div className="w-1/2 h-full overflow-y-auto flex flex-col scroll-smooth max-lg:w-3/4">
			{value.todos.map((todo, index) => (
				<Todo key={index} index={index} text={todo.text} isDone={todo.isDone} />
			))}
		</div>
	);
};

export default List;
