import React from "react";
import { Router } from "react-router-dom";
import historyBrowser from "./routes/history";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Router history={historyBrowser}>
        <main>
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;
