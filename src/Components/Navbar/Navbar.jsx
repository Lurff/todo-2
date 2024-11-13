import React, { useContext } from "react";
import { BiPlus } from "react-icons/bi";
import Context from "../../App/context";

const Navbar = () => {
	const { value, setValue } = useContext(Context);

	const HandleSubmit = () => {
		setValue((v) => ({
			...v,
			text: "",
			todos: [...v.todos, { text: v.text, isDone: false }],
		}));
	};

	const HandleWrite = (e) => {
		setValue((v) => ({ ...v, text: e.target.value }));
	};

	return (
		<div className="w-full flex justify-center sticky pt-5">
			<div className="w-1/2 max-lg:w-3/4 p-5 border border-[#555] rounded-lg gap-5 flex">
				<div className="w-full h-full flex items-center gap-3 text-lg p-0.5">
					<input
						value={value.text}
						placeholder="Todo"
						onChange={HandleWrite}
						onKeyUp={(e) => e.key === "Enter" && HandleSubmit()}
						type="text"
						className="w-full bg-transparent outline-none text-white"
					/>
					<button
						onClick={HandleSubmit}
						disabled={!value.text.length > 0}
						className="px-3 py-1.5 text-lg text-white bg-violet-800/50 hover:bg-violet-900 transition-all rounded-lg disabled:text-white/25 disabled:bg-violet-800/25"
					>
						<BiPlus size={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
