import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio profile sections", () => {
  render(<App />);
  expect(screen.getByText("Professional Profile")).toBeInTheDocument();
  expect(screen.getByText("Studies & Certifications")).toBeInTheDocument();
  expect(screen.getByText("Work & Leadership")).toBeInTheDocument();
});
