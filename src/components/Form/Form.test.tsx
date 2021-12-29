import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import { Form } from "./Form";
import { AlbumsContext } from "../../context/albumsContext";

const mockRedirectToAlbumsScreen = jest.fn();
const mockAddAlbum = jest.fn();
const mockEditAlbum = jest.fn();

jest.mock("../../hooks", () => ({
  useNavigationHook: jest.fn().mockImplementation(() => ({
    redirectToAlbumsScreen: mockRedirectToAlbumsScreen,
  })),
}));

describe("Test Form component", () => {
  it("Should submit new album", () => {
    const { getByTestId } = render(
      <AlbumsContext.Provider value={{ editAlbum: mockEditAlbum, addNewAlbum: mockAddAlbum } as any}>
        <Form />
      </AlbumsContext.Provider>
    );
    const input = getByTestId("input");
    const button = getByTestId("button-container");
    fireEvent.changeText(input, "New album");
    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
    expect(button.children[0].props.disabled).toBeFalsy();
    act(() => button.children[0].props.onPress());
    expect(mockAddAlbum).toHaveBeenCalledWith("New album");
  });
  it("Should edit album", () => {
    const mockAddAlbum = jest.fn();
    const { getByTestId } = render(
      <AlbumsContext.Provider value={{ editAlbum: mockEditAlbum, addNewAlbum: mockAddAlbum } as any}>
        <Form title="Album" id={1} />
      </AlbumsContext.Provider>
    );
    const input = getByTestId("input");
    const button = getByTestId("button-container");
    fireEvent.changeText(input, "Edited album");
    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
    expect(button.children[0].props.disabled).toBeFalsy();
    act(() => button.children[0].props.onPress());
    expect(mockEditAlbum).toHaveBeenCalledWith(1, "Edited album");
  });
});