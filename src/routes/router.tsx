import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { pagesForRouting } from "../config/pagesForRouting.tsx";

interface IRouterProps {
	routePath: string;
	Component: FC;
}

export const Router: FC = () => {
	return (
		<Routes>
			{pagesForRouting.map(({ routePath, Component }: IRouterProps) => (
				<Route
					key={routePath}
					path={routePath}
					element={<Component />}
				/>
			))}
			;
		</Routes>
	);
};
