import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeButton } from "../HomeButton";
import { BackButton } from "../BackButton";

test("Home button test", () => {
  render(<HomeButton />);

  const iconElement = screen.getByText("home");
  expect(iconElement).toBeInTheDocument();
});

test("Back button test", () => {
  render(<BackButton />);

  const iconElement = screen.getByText("arrow_back");
  expect(iconElement).toBeInTheDocument();
});
