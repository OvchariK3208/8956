import React from "react";
import HomePage from './../pages/HomePage';
import DeliveryPage from './../pages/DeliveryPage';

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export enum RouteNames {
  HOME = '/',
  DELIVERY = '/delivery'
}

export const rootRoutes: IRoute[] = [
	{ path: RouteNames.HOME, element: <HomePage /> },
	{ path: RouteNames.DELIVERY, element: <DeliveryPage /> }
]