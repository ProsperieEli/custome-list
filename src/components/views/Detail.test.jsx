import { rest } from "msw";
import { setupServer } from "msw/node";
import Detail from "./Detail";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const server = setupServer(
  rest.get(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/:id",
    (req, res, ctx) => {
      return res(
        ctx.json({
          id: "1",
          name: "Aang",
          allies: "Zuko",
          enemies: "Ozan",
          photoUrl: "www.Aang.com",
        })
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
  it("detail of person", async () => {
    render(
      <MemoryRouter initialEntries={["/character/1"]}>
        <Route to="/character/:id">
          <Detail />
        </Route>
      </MemoryRouter>
    );
    await screen.findByText("Aang");
  });
});
