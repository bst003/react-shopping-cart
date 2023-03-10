import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProdCartForm from "../ProdCartForm";

describe("ProdCartForm component", () => {
    it("calls onSubmitMock correct number of times", () => {
        const onSubmitMock = jest.fn();
        render(<ProdCartForm addToCart={onSubmitMock} id="01" name="test prod" price="30" />);

        const submitBtn = screen.getByRole("button", { type: /submit/i });

        userEvent.click(submitBtn);

        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
});
