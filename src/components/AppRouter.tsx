import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { rootRoutes, RouteNames } from './../router/routes'
//import Loader from './../components/UI/loader/Load


const AppRouter: FC = () => {
	return (
		<Routes>
			{rootRoutes.map(({ path, element }) =>
				<Route 
					path={path} 
					element={element} 
					key={path} 
				/>
			)}
			<Route
			  path="*"
			  element={ <Navigate to={ RouteNames.HOME } /> }
			/>
    </Routes>
	)
}

export default AppRouter;