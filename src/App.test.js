import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero name and main sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Maryam\s*Amjad/);
  expect(screen.getByRole("heading", { name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^experience$/i })).toBeInTheDocument();
});