import * as React from "react";

interface TrackPlayerState {
  trackName: string;
  trackArtist: string;
  trackImage: string;
  setTrack: ({ trackName, trackArtist, trackImage }) => void;
  deleteTrack: () => void;
}

const initialState = {
  trackName: null,
  trackArtist: null,
  trackImage: null,
  setTrack: undefined,
  deleteTrack: undefined,
};

export const TrackPlayerContext =
  React.createContext<TrackPlayerState>(initialState);

export const TrackPlayerContextProvider = ({ children }) => {
  const [trackName, setTrackName] = React.useState(null);
  const [trackArtist, setTrackArtist] = React.useState(null);
  const [trackImage, setTrackImage] = React.useState(null);

  const setTrack = async (obj) => {
    setTrackName(obj.trackName);
    setTrackArtist(obj.trackArtist);
    setTrackImage(obj.trackImage);
  };

  const deleteTrack = async () => {
    setTrackName(null);
    setTrackArtist(null);
    setTrackImage(null);
  };

  return (
    <TrackPlayerContext.Provider
      value={{
        trackName,
        trackArtist,
        trackImage,
        setTrack,
        deleteTrack,
      }}
    >
      {children}
    </TrackPlayerContext.Provider>
  );
};

export const useTrackPlayer = () =>
  React.useContext<TrackPlayerState>(TrackPlayerContext);
