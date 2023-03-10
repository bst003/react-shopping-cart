import React from "react";
import { screen, render } from "@testing-library/react";
import SubHero from "../SubHero";

describe("SubHero component", () => {
    it("renders correct heading based on props", () => {
        render(<SubHero title="Hello World" />);

        const subHeroTitle = screen.getByRole("heading");

        expect(subHeroTitle.textContent).toMatch("Hello World");
    });
});
