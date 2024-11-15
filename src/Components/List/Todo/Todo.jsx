import React, { useContext, useState } from "react";
import { CiStop1, CiSquareCheck, CiTrash } from "react-icons/ci";
import Context from "../../../App/context";

const Todo = ({ text, isDone, index }) => {
	const [hover, setHover] = useState(false);
	const { setValue } = useContext(Context);

	const handleDone = () => {
		setValue((v) => {
			const updatedTodos = v.todos.map((todo, i) =>
				i === index ? { ...todo, isDone: !isDone } : todo
			);
			return { ...v, todos: updatedTodos };
		});
	};

	const handleDelete = () => {
		setValue((v) => ({
			...v,
			todos: v.todos.filter((_, i) => i !== index),
		}));
	};

	return (
		<div className="w-full flex flex-row items-center p-3 text-gray-300 select-none">
			<span className="flex-1 w-full text-balance break-words truncate">
				{text}
			</span>
			<div className="flex items-center gap-2">
				<button
					onClick={handleDelete}
					className="hover:opacity-50 transition-all text-red-600"
				>
					<CiTrash size={24} />
				</button>
				<button
					onMouseOver={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={handleDone}
				>
					{hover && isDone && <CiStop1 size={24} className="opacity-50" />}
					{hover && !isDone && (
						<CiSquareCheck size={24} className="opacity-50" />
					)}
					{!hover && isDone && <CiSquareCheck size={24} />}
					{!hover && !isDone && <CiStop1 size={24} />}
				</button>
			</div>
		</div>
	);
};

export default Todo;
