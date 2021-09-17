import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable } from "../Datatable";

const headers = [
  {
    key: "name",
    text: "track.name",
  },
  {
    key: "artist",
    text: "track.artists",
  },
  {
    key: "duration_ms",
    text: "track.duration",
  },
];
const dataSource = [
  { name: "name-test-1", artist: "artist-test-1", duration_ms: 999 },
  { name: "name-test-2", artist: "artist-test-2", duration_ms: 888 },
  { name: "name-test-3", artist: "artist-test-3", duration_ms: 777 },
];

test("Datatable test", () => {
  render(<DataTable dataSource={dataSource} headers={headers} />);

  headers.forEach((header) => {
    const screenHeader = screen.getByText(header.text);
    expect(screenHeader).toBeInTheDocument();

    dataSource.forEach((data) => {
      const screenData = screen.getByText(data[header.key]);
      expect(screenData).toBeInTheDocument();
    });
  });
});
