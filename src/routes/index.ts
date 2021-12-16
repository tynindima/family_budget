import Login from 'pages/Login';
import Schedule from 'pages/Schedule';

export interface IRoute {
  path: string;
  element: React.ReactElement | null;
  caseSensitive?: boolean;
};

export enum RouteNames {
  LOGIN = 'LOGIN',
  SCHEDULE = '/',
};

export const publicRoutes = [
  { path: RouteNames.LOGIN, caseSensitive: true, element: Login },
];

export const privateRoutes = [
  { path: RouteNames.SCHEDULE, caseSensitive: true, element: Schedule },
];
