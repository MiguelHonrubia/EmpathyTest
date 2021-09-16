import * as React from "react";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { useTrackPlayer } from "../../../infraestructure/data/contexts/trackPlayer";
import {
  StyledTrackContent,
  StyledTrackIcon,
  StyledTrackPlayerContainer,
  StyledTrackPlayerBox,
  StyledTrackInfo,
  StyledNoDataImage,
  StyledImage,
  StyledCloseButtonContainer,
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
              <i className="material-icons md-18">headphones</i>
            </StyledTrackIcon>
            <StyledTrackContent>
              <StyledTrackInfo>
                <div>{trackName}</div>
                <i style={{ opacity: 0.5 }}>{trackArtist}</i>
              </StyledTrackInfo>
              {trackImage ? (
                <StyledImage src={trackImage}></StyledImage>
              ) : (
                <StyledNoDataImage></StyledNoDataImage>
              )}

              <StyledCloseButtonContainer>
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
              </StyledCloseButtonContainer>
            </StyledTrackContent>
          </StyledTrackPlayerBox>
        </StyledTrackPlayerContainer>
      )}
    </>
  );
};
