import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
const defaultProps = {
  onClick: jest.fn(),
  className: "btn btn-default",
};
const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
describe("test Button Component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
