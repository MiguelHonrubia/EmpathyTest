import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ArtistList } from "../ArtistList";
import { ArtistDetailType } from "../../../../infraestructure/core/models/Artist";

const title = "general.artists";
const artists: ArtistDetailType[] = [
  {
    id: "id1234",
    name: "artist-name",
    popularity: 99,
    href: "",
    images: [{ url: "url", height: 200, width: 200 }],
    followers: { total: 100, href: "" },
    genres: [],
  },
];

test("Artist list test", () => {
  render(<ArtistList dataSource={artists} />);

  const titleElement = screen.getByText(title);
  const albumNameElement = screen.getByText("artist-name");

  expect(titleElement).toBeInTheDocument();
  expect(albumNameElement).toBeInTheDocument();
});

test("Artist list test without title", () => {
  render(<ArtistList dataSource={artists} showTitle={false} />);

  const artistNameElement = screen.getByText("artist-name");

  expect(() => screen.getByText(title)).toThrow();
  expect(artistNameElement).toBeInTheDocument();
});
