import { Routes, Route } from "react-router-dom";

import { pagesForRouting } from "../config/pagesForRouting";

export const Router = () => {
	return (
		<Routes>
			{pagesForRouting.map(({ routePath, Component }) => (
                	<Route
					key={routePath}
					path={routePath}
					element={<Component />}
				/>
            ))};
		</Routes>
	);
};
