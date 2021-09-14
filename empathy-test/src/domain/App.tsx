import React from "react";
import { Router } from "react-router-dom";
import historyBrowser from "./routes/history";
import { AppRoutes } from "./routes/AppRoutes";
import { RandomThemeContextProvider } from "../infraestructure/data/contexts/theme";
import { TrackPlayer } from "./components/trackPlayer/TrackPlayer";
import {
  TrackPlayerContextProvider,
  useTrackPlayer,
} from "../infraestructure/data/contexts/trackPlayer";

function App() {
  return (
    <div>
      <RandomThemeContextProvider>
        <TrackPlayerContextProvider>
          <TrackPlayer></TrackPlayer>
          <Router history={historyBrowser}>
            <main>
              <AppRoutes />
            </main>
          </Router>
        </TrackPlayerContextProvider>
      </RandomThemeContextProvider>
    </div>
  );
}

export default App;
