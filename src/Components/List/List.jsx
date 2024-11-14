import React, { useContext } from "react";

import { Accordion, AccordionTab } from "primereact/accordion";

import Context from "../../App/context";

const List = () => {
	const { value, setValue } = useContext(Context);

	return (
		<div className="w-full h-full p-5 flex items-center justify-center">
			<div className=" w-full h-full flex flex-col items-center justify-center">
				<Accordion activeIndex={0}>
					<AccordionTab>
						{value.todos
							.filter((todo) => !todo.isDone)
							.map((todo, index) => (
								<div>{todo.text}</div>
							))}
					</AccordionTab>
					<AccordionTab>
						{value.todos
							.filter((todo) => todo.isdone)
							.map((todo, index) => (
								<div>{todo.text}</div>
							))}
					</AccordionTab>
				</Accordion>
			</div>
		</div>
	);
};

export default List;
