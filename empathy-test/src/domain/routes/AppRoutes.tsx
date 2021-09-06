import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Switch>
          {routes.map(({ path, Component, exact }, index) => (
            <Route
              component={Component}
              path={path}
              key={index}
              exact={exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </>
  );
};
