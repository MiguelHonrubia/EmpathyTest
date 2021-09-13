import { DatatableField } from "../../Datatable";
import * as React from "react";
import { formatTime } from "../../../utils/format-time";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import history from "../../../../../domain/routes/history";

const albumTemplate: React.FC<any> = (params) => {
  return (
    <span>
      {params.artists.map((elem, index) => (
        <Router history={history} key={index}>
          <Link to={`/album=${params.album.id}`}>{params.album.name}</Link>
        </Router>
      ))}
    </span>
  );
};

const artistTemplate: React.FC<any> = (params) => {
  return (
    <span>
      {params.artists.map((elem, index) => (
        <Router history={history} key={index}>
          <Link to={`/artist=${params.id}`}>
            {index > 0 ? `, ${elem.name}` : elem.name}
          </Link>
        </Router>
      ))}
    </span>
  );
};

const durationTemplate: React.FC<any> = (params) => {
  return <span>{formatTime(params.duration_ms)}</span>;
};

export const TRACK_LIST_KEYS: DatatableField[] = [
  {
    key: "name",
    text: "track.name",
  },
  {
    key: "album",
    text: "track.album",
    template: albumTemplate,
  },
  {
    key: "artist",
    text: "track.artists",
    template: artistTemplate,
  },
  {
    key: "duration_ms",
    text: "track.duration",
    template: durationTemplate,
  },
];
