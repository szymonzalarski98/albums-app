import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { Input } from "./Input";

const mockOnChange = jest.fn();

describe("Test Input component", () => {
  it("Should change input text", () => {
    const { getByPlaceholderText } = render(<Input value="" placeholder="Placeholder" onChange={mockOnChange} error={null} />);
    const input = getByPlaceholderText("Placeholder");
    expect(input).not.toBeNull();
    fireEvent.changeText(input, "test");
    expect(mockOnChange).toHaveBeenCalledWith("test");
  });
  it("Should display value", () => {
    const { getByPlaceholderText } = render(<Input value="Title" placeholder="Placeholder" onChange={mockOnChange} error={null} />);
    const input = getByPlaceholderText("Placeholder");
    expect(input.props.value).toBe("Title");
  });
  it("Should display error", () => {
    const { getByText } = render(<Input value="Title" placeholder="Placeholder" onChange={mockOnChange} error={"Error"} />);
    expect(getByText("Error")).not.toBeNull();
  })
});