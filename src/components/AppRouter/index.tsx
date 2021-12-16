import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from 'routes';

const AppRouter = (): JSX.Element => {
  const auth = true;

  return (
    auth
      ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              caseSensitive={route.caseSensitive}
            />
          ))}
          <Route path="*" element={<Navigate replace to={RouteNames.SCHEDULE} />} />
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              caseSensitive={route.caseSensitive}
            />
          ))}
          <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
        </Routes>
      )
  );
};

export default AppRouter;
