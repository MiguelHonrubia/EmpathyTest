import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlbumList } from "../AlbumList";
import { AlbumDetailType } from "../../../../infraestructure/core/models/Album";

const title = "general.albums";
const totalTracks = "9999";
const releaseDate = new Date().toLocaleDateString();
const albumName = "album-name";
const totalTracks2 = "8888";
const albumName2 = "album-name2";

test("Album list test", () => {
  const albums: AlbumDetailType[] = [
    {
      id: "id1234",
      name: "album-name",
      release_date: new Date().toString(),
      total_tracks: 9999,
      artists: [],
      images: [{ url: "url", height: 200, width: 200 }],
      tracks: null,
    },
    {
      id: "id12345",
      name: "album-name2",
      release_date: new Date().toString(),
      total_tracks: 8888,
      artists: [],
      images: [{ url: "url", height: 200, width: 200 }],
      tracks: null,
    },
  ];

  render(<AlbumList dataSource={albums} />);

  const ttileElement = screen.getByText(title);
  const albumNameElement = screen.getByText(albumName);
  const releaseDateElement = screen.getAllByText(releaseDate);
  const totalTracksElement = screen.getByText(totalTracks);
  const albumNameElement2 = screen.getByText(albumName2);
  const totalTracksElement2 = screen.getByText(totalTracks2);

  expect(ttileElement).toBeInTheDocument();
  expect(albumNameElement).toBeInTheDocument();
  expect(releaseDateElement).toHaveLength(2);
  expect(totalTracksElement).toBeInTheDocument();
  expect(albumNameElement2).toBeInTheDocument();
  expect(totalTracksElement2).toBeInTheDocument();
});
