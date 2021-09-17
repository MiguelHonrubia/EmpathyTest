import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HistoryList } from "../HistoryList";
import { HistoryType } from "../../../../infraestructure/core/models/History";
import { compactNumber } from "../../../../infraestructure/core/utils/number-parser";

const title = "history.title";
const dataSource: HistoryType[] = [
  {
    search: "search_text_1",
    date: new Date().toLocaleDateString(),
    artistResults: 999,
    albumResults: 888,
    songResults: 777,
  },
  {
    search: "search_text_2",
    date: new Date().toLocaleDateString(),
    artistResults: 666,
    albumResults: 555,
    songResults: 444,
  },
];

test("History list test", () => {
  const onDelete = () => {};

  render(<HistoryList dataSource={dataSource} onDelete={onDelete} />);

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  dataSource.forEach((data) => {
    const searchElement = screen.getByText(data.search);
    const dateElement = screen.getAllByText(data.date);
    const artistResultsElement = screen.getByText(
      compactNumber(data.artistResults)
    );
    const albumResultsElement = screen.getByText(
      compactNumber(data.albumResults)
    );
    const songResultsElement = screen.getByText(
      compactNumber(data.songResults)
    );

    expect(searchElement).toBeInTheDocument();
    expect(dateElement).toHaveLength(2);
    expect(artistResultsElement).toBeInTheDocument();
    expect(albumResultsElement).toBeInTheDocument();
    expect(songResultsElement).toBeInTheDocument();
  });
});
