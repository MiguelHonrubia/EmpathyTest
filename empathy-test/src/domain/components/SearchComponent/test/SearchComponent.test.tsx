import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchComponent } from "../SearchComponent";

const historyButton = "general.history";
const searchButton = "general.search";

test("Search component test", () => {
  const onSubmit = () => {};
  const onClickHistory = () => {};
  const setSearchValue = () => {};

  render(
    <SearchComponent
      onSubmit={onSubmit}
      onClickHistory={onClickHistory}
      searchValue={"search_text"}
      setSearchValue={setSearchValue}
      loading={false}
      showHistoryButton={true}
    />
  );

  const historyElement = screen.getByText(historyButton);
  const searchElement = screen.getByText(searchButton);

  expect(historyElement).toBeInTheDocument();
  expect(searchElement).toBeInTheDocument();
});

test("Search component without history button test", () => {
  const onSubmit = () => {};
  const onClickHistory = () => {};
  const setSearchValue = () => {};

  render(
    <SearchComponent
      onSubmit={onSubmit}
      onClickHistory={onClickHistory}
      searchValue={"search_text"}
      setSearchValue={setSearchValue}
      loading={false}
      showHistoryButton={false}
    />
  );

  const searchElement = screen.getByText(searchButton);

  expect(() => screen.getByText(historyButton)).toThrow();
  expect(searchElement).toBeInTheDocument();
});
