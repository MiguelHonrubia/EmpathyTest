import { DatatableField } from "../../Datatable";
import * as React from "react";
import { formatTime } from "../../../utils/format-time";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import history from "../../../../../domain/routes/history";
import { useRandomTheme } from "../../../../data/contexts/theme";
import { StyledLink } from "../../../../../domain/components/datatable/style";
import { useTrackPlayer } from "../../../../data/contexts/trackPlayer";

export const TrackTemplate: React.FC<any> = (params) => {
  const { themeColor } = useRandomTheme();
  const { setTrack } = useTrackPlayer();

  const onTrackClick = async () => {
    let artists;
    params.artists.forEach((e, index) => {
      artists = `${artists ? artists : ""} ${
        index > 0 ? ", " + e.name : e.name
      }`;
    });
    const image = params.album && params.album.images[0].url;
    setTrack({
      trackName: params.name,
      trackArtist: artists,
      trackImage: image,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        textOverflow: "ellipsis",
        overflowX: "hidden",
      }}
    >
      <div
        className="material-icons md-18"
        style={{ marginRight: 5, cursor: "pointer" }}
        onClick={onTrackClick}
      >
        play_circle_filled
      </div>

      <StyledLink
        color={themeColor && themeColor.primary}
        onClick={onTrackClick}
        style={{ cursor: "pointer" }}
      >
        {params.name}
      </StyledLink>
    </div>
  );
};

export const AlbumTemplate: React.FC<any> = (params) => {
  const { themeColor } = useRandomTheme();
  return (
    <span>
      <Router history={history}>
        <Link
          to={`/album=${params.album.id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <StyledLink color={themeColor && themeColor.primary}>
            {params.album.name}
          </StyledLink>
        </Link>
      </Router>
    </span>
  );
};

export const ArtistTemplate: React.FC<any> = (params) => {
  const { themeColor } = useRandomTheme();
  return (
    <span>
      {params.artists.map((elem, index) => (
        <Router history={history} key={index}>
          <Link
            to={`/artist=${params.id}`}
            style={{
              textDecoration: "none",
            }}
          >
            {index > 0 ? (
              <span style={{ color: "white" }}>
                ,
                <StyledLink
                  color={themeColor && themeColor.primary}
                  style={{ marginLeft: 5 }}
                >
                  {elem.name}
                </StyledLink>
              </span>
            ) : (
              <StyledLink color={themeColor && themeColor.primary}>
                {elem.name}
              </StyledLink>
            )}
          </Link>
        </Router>
      ))}
    </span>
  );
};

export const DurationTemplate: React.FC<any> = (params) => {
  return <span>{formatTime(params.duration_ms)}</span>;
};

export const TRACK_LIST_KEYS: DatatableField[] = [
  {
    key: "name",
    text: "track.name",
    template: TrackTemplate,
  },
  {
    key: "album",
    text: "track.album",
    template: AlbumTemplate,
  },
  {
    key: "artist",
    text: "track.artists",
    template: ArtistTemplate,
  },
  {
    key: "duration_ms",
    text: "track.duration",
    template: DurationTemplate,
  },
  {
    key: "popularity",
    text: "track.popularity",
  },
];

export const ALBUM_TRACKS_LIST_KEYS: DatatableField[] = [
  {
    key: "name",
    text: "track.name",
    template: TrackTemplate,
  },
  {
    key: "artist",
    text: "track.artists",
    template: ArtistTemplate,
  },
  {
    key: "duration_ms",
    text: "track.duration",
    template: DurationTemplate,
  },
];
