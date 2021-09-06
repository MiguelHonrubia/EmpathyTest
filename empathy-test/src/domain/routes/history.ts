import { matchPath } from "react-router-dom";
import { routes } from "./routes";
import { createBrowserHistory } from "history";

export default createBrowserHistory({});

export const getRoute = (path) => {
  return routes.find((route) => {
    return !!matchPath(path, {
      path: route.path,
      exact: true,
      strict: false,
    });
  });
};

export const getRouteToGo = (id: string) => {
  return routes.find((x) => x.id === id)?.path || "/";
};

export const isSelected = (history: any, id: string) => {
  return history.location.pathname === `/${id}`;
};
