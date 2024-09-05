import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	// PROFILE = 'profile',
	// ARTICLES = 'articles',
	// ARTICLE_DETAILS = 'article_details',
	// NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	// [AppRoutes.PROFILE]: '/profile',
	// [AppRoutes.ARTICLES]: '/articles',
	// [AppRoutes.ARTICLE_DETAILS]: '/articles/',
	// [AppRoutes.NOT_FOUND]: '*',
};

interface IRouteProps {
	path: string;
	element: JSX.Element;
}

export const routeConfig: Record<AppRoutes, IRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <HomePage />,
	},
};
