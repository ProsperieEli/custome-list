import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Character from "./Characters";

describe("testing", () => {
  it("character", () => {
    const mock = [
      {
        id: "2",
        name: "Aang",
        photoUrl: "www.aang.com",
        allies: "zuko",
        enemies: "ozan",
      },
      {
        id: "3",
        name: "Zuko",
        photoUrl: "www.zuko.com",
        allies: "Aang",
        enemies: "Ozan",
      },
    ];
    const container = screen;
    render(
      <MemoryRouter>
        <Character characters={mock} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
