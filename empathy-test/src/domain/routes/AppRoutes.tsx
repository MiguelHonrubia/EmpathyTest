import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { fetchAccessToken } from "../../infraestructure/data/providers/auth";
import { routes } from "./routes";

export const AppRoutes: React.FC = () => {
  const onAuthSpotifyApi = async () => {
    try {
      const response = await fetchAccessToken({
        grant_type: "client_credentials",
      });

      sessionStorage.setItem("access_token", response.access_token);
    } catch {}
  };

  React.useEffect(() => {
    if (!sessionStorage.getItem("access_token")) {
      onAuthSpotifyApi();
    }
  }, []);

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
