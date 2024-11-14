import React, { useState } from "react";

import Navbar from "../Components/Navbar/Navbar";
import List from "../Components/List/List";

const Layout = () => {
	return (
		<div className="w-full min-h-screen flex flex-col gap-5">
			<Navbar />
			<List />
		</div>
	);
};

export default Layout;
