import { useNavigationHook } from "./useNavigationHook";
import { useNavigation } from "@react-navigation/native";
import { act } from "@testing-library/react-native";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Test useNavigationHook", () => {
  it("Should call redirectToEditPostScreen", () => {
    const { redirectToEditPostScreen } = useNavigationHook();
    act(() => redirectToEditPostScreen(1, "Edit post"));
    expect(mockedNavigate).toHaveBeenCalledWith("Edit", {
      albumId: 1,
      title: "Edit post",
    });
  });
  it("Should call redirectToDetailsPostScreen", () => {
    const { redirectToDetailsPostScreen } = useNavigationHook();
    act(() => redirectToDetailsPostScreen(1, "Post"));
    expect(mockedNavigate).toHaveBeenCalledWith("Details", {
      albumId: 1,
      title: "Post",
    });
  });
  it("Should call redirectToAddAlbumScreen", () => {
    const { redirectToAddAlbumScreen } = useNavigationHook();
    act(() => redirectToAddAlbumScreen());
    expect(mockedNavigate).toHaveBeenCalledWith("Add");
  });
  it("Should call redirectToAlbumsScreen", () => {
    const { redirectToAlbumsScreen } = useNavigationHook();
    act(() => redirectToAlbumsScreen());
    expect(mockedNavigate).toHaveBeenCalledWith("Albums");
  });
});
