import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { fetchAccessToken } from "../../infraestructure/data/providers/auth";
import { routes } from "./routes";

import { useRandomTheme } from "../../infraestructure/data/contexts/theme";

const themeColorAux = [
  { primary: "#b43048", secondary: "#711728" },
  { primary: "#8d6091", secondary: "#4e2f58" },
  { primary: "#04b3de", secondary: "#0580c4" },
  { primary: "#3dbd75", secondary: "#1a8c44" },
  { primary: "#f3cb50", secondary: "#bb6701" },
];

export const AppRoutes: React.FC = () => {
  const { setThemeColor, setThemeIndex } = useRandomTheme();

  const randomizeTheme = () => {
    const randomIndex = Math.floor(Math.random() * 5);

    setThemeIndex(randomIndex);
    setThemeColor({
      primary: themeColorAux[randomIndex].primary,
      secondary: themeColorAux[randomIndex].secondary,
    });
  };

  React.useEffect(() => {
    randomizeTheme();
  }, []);

  const onAuthSpotifyApi = async () => {
    try {
      const response = await fetchAccessToken({
        grant_type: "client_credentials",
      });

      sessionStorage.setItem("access_token", response.access_token);
    } catch {
      sessionStorage.removeItem("access_token");
    }
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
