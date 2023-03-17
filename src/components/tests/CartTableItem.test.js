import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CartTableItem from "../CartTableItem";

describe("CartTableItem component", () => {
    it("edit button click triggers update form", () => {
        const onDeleteMock = jest.fn();
        const onUpdateMock = jest.fn();
        render(
            <MemoryRouter>
                <CartTableItem
                    key="01"
                    id="01"
                    name="Test Prod"
                    slug="test-prod"
                    quantity="03"
                    price="30"
                    image=""
                    deleteCartItem={onDeleteMock}
                    updateCartItem={onUpdateMock}
                />
            </MemoryRouter>
        );

        const editBtn = screen.getByTestId("edit-cart-item");

        userEvent.click(editBtn);

        const formLabel = screen.getByLabelText("Quantity");

        expect(formLabel).toBeTruthy();
    });

    it("onDeleteMock is passed the correct data", () => {
        const onDeleteMock = jest.fn();
        const onUpdateMock = jest.fn();
        render(
            <MemoryRouter>
                <CartTableItem
                    key="01"
                    id="01"
                    name="Test Prod"
                    slug="test-prod"
                    quantity="03"
                    price="30"
                    image=""
                    deleteCartItem={onDeleteMock}
                    updateCartItem={onUpdateMock}
                />
            </MemoryRouter>
        );

        const deleteBtn = screen.getByTestId("delete-cart-item");

        userEvent.click(deleteBtn);

        const cartItem = {
            id: "01",
        };

        expect(onDeleteMock).toHaveBeenNthCalledWith(1, cartItem);
    });
});
