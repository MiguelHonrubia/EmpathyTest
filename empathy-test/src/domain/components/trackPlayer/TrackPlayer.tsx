import * as React from "react";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { useTrackPlayer } from "../../../infraestructure/data/contexts/trackPlayer";
import {
  StyledTrackContent,
  StyledTrackIcon,
  StyledTrackPlayerContainer,
  StyledTrackPlayerBox,
  StyledTrackInfo,
} from "./style";

export const TrackPlayer: React.FC = () => {
  const { themeColor } = useRandomTheme();
  const { trackName, trackImage, trackArtist, deleteTrack } = useTrackPlayer();
  return (
    <>
      {trackName && (
        <StyledTrackPlayerContainer>
          <StyledTrackPlayerBox>
            <StyledTrackIcon color={themeColor && themeColor.primary}>
              <i className="material-icons md-18" style={{ marginRight: 5 }}>
                headphones
              </i>
            </StyledTrackIcon>
            <StyledTrackContent>
              <StyledTrackInfo>
                <div>{trackName}</div>
                <i style={{ opacity: 0.5 }}>{trackArtist}</i>
              </StyledTrackInfo>
              {trackImage ? (
                <img
                  src={trackImage}
                  width={50}
                  height={50}
                  style={{ margin: "auto 10px auto auto" }}
                ></img>
              ) : (
                <div
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "white",
                    margin: "auto 10px auto auto",
                  }}
                ></div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0px 0px 0px 1px black",
                }}
              >
                <i
                  className="material-icons md-18"
                  style={{
                    marginRight: 5,
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={deleteTrack}
                >
                  clear
                </i>
              </div>
            </StyledTrackContent>
          </StyledTrackPlayerBox>
        </StyledTrackPlayerContainer>
      )}
    </>
  );
};
