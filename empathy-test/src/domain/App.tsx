import React from "react";
import { Router } from "react-router-dom";
import historyBrowser from "./routes/history";
import { AppRoutes } from "./routes/AppRoutes";
import { RandomThemeContextProvider } from "../infraestructure/data/contexts/theme";

function App() {
  return (
    <div className="App">
      <RandomThemeContextProvider>
        <Router history={historyBrowser}>
          <main>
            <AppRoutes />
          </main>
        </Router>
      </RandomThemeContextProvider>
    </div>
  );
}

export default App;
