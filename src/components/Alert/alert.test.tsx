import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert, { AlertProps, AlertType } from "./alert";

const defaultProps: AlertProps = {
  alertType: AlertType.Default,
  content: "success",
};
const dangerProps: AlertProps = {
  alertType: AlertType.Danger,
  content: "操作错误，请联系值班人员。",
};

const titleProps: AlertProps = {
  alertType: AlertType.Default,
  title: "提示",
  content: "您确认继续操作吗",
};

const closeBtnProps: AlertProps = {
  alertType: AlertType.Default,
  title: "提示",
  content: "您确认继续操作吗",
  closeable: true,
};

describe("test alert component", () => {
  it("should render the correct default alert", () => {
    const wrapper = render(<Alert {...defaultProps} />);
    const element = wrapper.getByText("success") as HTMLParagraphElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("P");
    expect((element.parentNode as HTMLDivElement).parentNode).toHaveClass(
      "alert alert-default"
    );
  });

  it("should render the correct danger alert", () => {
    const wrapper = render(<Alert {...dangerProps} />);
    const element = wrapper.getByText(
      "操作错误，请联系值班人员。"
    ) as HTMLParagraphElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("P");
    expect((element.parentNode as HTMLDivElement).parentNode).toHaveClass(
      "alert alert-danger"
    );
  });
  it("should render the correct alert with title", () => {
    const wrapper = render(<Alert {...titleProps} />);
    const element = wrapper.getByText(
      "您确认继续操作吗"
    ) as HTMLParagraphElement;
    const titleE = wrapper.getByText("提示") as HTMLDivElement;
    expect(element).toBeInTheDocument();
    expect(titleE).toBeInTheDocument();

    expect(element.tagName).toEqual("P");
    expect(titleE.tagName).toEqual("DIV");

    expect((element.parentNode as HTMLDivElement).parentNode).toHaveClass(
      "alert alert-default"
    );
  });

  it("should render the correct alert with closeBtn", () => {
    const wrapper = render(<Alert {...closeBtnProps} />);
    const element = wrapper.getByText(
      "您确认继续操作吗"
    ) as HTMLParagraphElement;
    const titleE = wrapper.getByText("提示") as HTMLDivElement;
    const closeBtn = wrapper.getByText("关闭") as HTMLDivElement;

    expect(element).toBeInTheDocument();
    expect(titleE).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();

    expect(element.tagName).toEqual("P");
    expect(titleE.tagName).toEqual("DIV");
    expect(closeBtn.tagName).toEqual("DIV");

    expect((element.parentNode as HTMLDivElement).parentNode).toHaveClass(
      "alert alert-default"
    );
  });
});
