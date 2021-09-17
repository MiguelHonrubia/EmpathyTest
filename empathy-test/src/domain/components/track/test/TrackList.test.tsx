import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TrackList } from "../TrackList";
import { TrackDetailType } from "../../../../infraestructure/core/models/Track";
import {
  AlbumTemplate,
  ArtistTemplate,
  DurationTemplate,
  TrackTemplate,
} from "../../../../infraestructure/core/models/keys/track/track-list-keys";
import { formatTime } from "../../../../infraestructure/core/utils/format-time";

const dataSource: TrackDetailType[] = [
  {
    popularity: 99,
    name: "track_name_1",
    id: "1234",
    href: "string",
    duration_ms: 1234,
    disc_number: 3,
    artists: [
      { id: "12345", name: "artist_name_1" },
      { id: "12345", name: "artist_name_3" },
      { id: "12345", name: "artist_name_4" },
    ],
    album: {
      id: "1234",
      name: "album_name_1",
    },
  },
  {
    popularity: 88,
    name: "track_name_2",
    id: "1234",
    href: "string",
    duration_ms: 4567,
    disc_number: 2,
    artists: [{ id: "12345", name: "artist_name_2" }],
    album: {
      id: "1234",
      name: "album_name_3",
    },
  },
];

const headers = [
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
    key: "artists",
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

test("Track list component test", () => {
  render(
    <TrackList dataSource={dataSource} headers={headers} title="title_text" />
  );

  const titleElement = screen.getByText("title_text");
  expect(titleElement).toBeInTheDocument();

  const playIcon = screen.getAllByText("play_circle_filled");
  expect(playIcon).toHaveLength(dataSource.length);

  headers.forEach((header) => {
    const headerElement = screen.getByText(header.text);
    expect(headerElement).toBeInTheDocument();

    dataSource.forEach((data) => {
      if (header.key == "artists") {
        data[header.key].forEach((artist) => {
          const artistElement = screen.getByText(artist.name);
          expect(artistElement).toBeInTheDocument();
        });
      } else {
        let dataElement;

        if (header.key == "album") {
          dataElement = screen.getByText(data[header.key].name);
        } else if (header.key == "duration_ms") {
          dataElement = screen.getByText(formatTime(data[header.key]));
        } else {
          dataElement = screen.getByText(data[header.key]);
        }

        expect(dataElement).toBeInTheDocument();
      }
    });
  });
});
