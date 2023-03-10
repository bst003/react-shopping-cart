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

    it("onSubmitMock is passed the correct data", () => {
        const onSubmitMock = jest.fn();
        render(<ProdCartForm addToCart={onSubmitMock} id="01" name="test prod" price="30" />);

        const submitBtn = screen.getByRole("button", { type: /submit/i });

        const cartItem = {
            name: "test prod",
            id: "01",
            quantity: 1,
        };

        userEvent.click(submitBtn);

        expect(onSubmitMock).toHaveBeenNthCalledWith(1, cartItem);
    });
});
