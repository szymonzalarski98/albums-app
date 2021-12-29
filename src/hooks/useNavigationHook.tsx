import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export const useNavigationHook = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const redirectToEditPostScreen = (albumId: number, title: string) => navigation.navigate("Edit", { albumId, title });
  const redirectToDetailsPostScreen = (albumId: number, title: string) => navigation.navigate("Details", { albumId, title });
  const redirectToAddAlbumScreen = () => navigation.navigate("Add");
  const redirectToAlbumsScreen = () => navigation.navigate("Albums");
  return {
    redirectToEditPostScreen,
    redirectToDetailsPostScreen,
    redirectToAddAlbumScreen,
    redirectToAlbumsScreen,
  };
};