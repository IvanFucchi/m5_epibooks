
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("1. Verifica che il componente Welcome venga montato correttamente", () => {
  render(
      <App />
  );

  const welcomeEl = screen.getByTestId("welcome-text");
  expect(welcomeEl).toBeInTheDocument();
});