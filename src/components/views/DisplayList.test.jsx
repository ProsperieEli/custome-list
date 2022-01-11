import { rest } from "msw";
import { setupServer } from "msw/node";
import DisplayList from "./DisplayList";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const server = setupServer(
  rest.get(
    "https://last-airbender-api.herokuapp.com/api/v1/characters",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "1",
            name: "Aang",
            photoUrl: "www.Aang.com",
          },
          {
            id: "2",
            name: "Zuko",
            photoUrl: "www.zuko.com",
          },
        ])
      );
    }
  )
);

describe("runs detail view", () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  it("display list", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Route to="/">
          <DisplayList />
        </Route>
      </MemoryRouter>
    );
    screen.getByText("Loading...");
    await screen.findByText("Aang");
  });
});
