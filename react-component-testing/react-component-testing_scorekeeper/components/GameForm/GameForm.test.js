import { getByLabelText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const nameOfGame = screen.getByLabelText(/Create a new game/i);
  const namesOfPlaters = screen.getByLabelText(
    /Player names, separated by comma/i
  );
  const createButton = screen.getByRole("button", { name: /Create game/i });

  expect(nameOfGame).toBeInTheDocument();
  expect(namesOfPlaters).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form", { name: /Create a new game/i });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);

  const user = userEvent.setup();

  const nameOfGameInput = screen.getByLabelText(/Name of game/i);
  await user.type(nameOfGameInput, "Name of Game");
  const nameOfPlayersInput = screen.getByLabelText(
    /Player names, separated by comma/i
  );
  await user.type(nameOfPlayersInput, "Susu");
  const createButton = screen.getByRole("button", {
    name: /Create game/i,
  });
  await user.click(createButton);

  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Name of Game",
    playerNames: ["Susu"],
  });
});

test("does not submit form if one inpwut field is left empty", async () => {});
