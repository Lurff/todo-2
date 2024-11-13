import { createRoot } from "react-dom/client";
import "../App/index.css";

import Layout from "../Layout/Layout";

import { Provider } from "./context";

createRoot(document.getElementById("root")).render(
	<Provider>
		<div className="w-full min-h-screen">
			<Layout />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="absolute w-full h-full inset-0 -z-10"
			>
				<filter id="n" x="0" y="0">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.5"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" fill="#000" />
				<rect width="100%" height="100%" filter="url(#n)" opacity="0.15" />
			</svg>
		</div>
	</Provider>
);
