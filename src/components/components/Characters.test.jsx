import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Characters from "./Characters";

describe("testing", () => {
  it("characters list", () => {
    const mock = [
      {
        id: "2",
        name: "Aang",
        photoUrl: "www.aang.com",
      },
      {
        id: "3",
        name: "Zuko",
        photoUrl: "www.zuko.com",
      },
    ];
    const container = screen;
    render(
      <MemoryRouter>
        <Characters characters={mock} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
