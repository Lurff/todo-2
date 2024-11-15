import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import List from "../Components/List/List";

const Layout = () => {
	return (
		<div className="w-full h-screen flex flex-col gap-5 items-center ">
			<Navbar />
			<List />
		</div>
	);
};

export default Layout;
