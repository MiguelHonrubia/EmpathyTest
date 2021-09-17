import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CoolBox } from "../CoolBox";

test("CoolBox test", () => {
  const children = "children example";

  render(<CoolBox>{children}</CoolBox>);

  const childrenElement = screen.getByText(children);
  expect(childrenElement).toBeInTheDocument();
});
