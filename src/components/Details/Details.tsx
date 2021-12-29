import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { getPhotos } from "../../api";
import { AlbumsContext } from "../../context/albumsContext";
import { useNavigationHook } from "../../hooks";
import { IPhoto } from "../../types";
import { Controls } from "../Controls";
import { Photos } from "../Photos";
import { Container } from "./styles";

export const Details = ({ albumId, title }) => {
  const { handleFavourite, chckIfAlbumIsInfavouriteList } = useContext(AlbumsContext);
  const { redirectToDetailsPostScreen, redirectToEditPostScreen } = useNavigationHook();
  const [details, setDetails] = useState<IPhoto[]>([]);
  const onfavouritePress = () => handleFavourite(albumId);
  const onDetailsPress = () => redirectToDetailsPostScreen(albumId, title);
  const onEditPress = () => redirectToEditPostScreen(albumId, title);
  const isfavourite = chckIfAlbumIsInfavouriteList(albumId);
  const fetchAlbumPhotos = async () => {
    const data = await getPhotos(albumId);
    setDetails(data);
  };
  useEffect(() => {
    fetchAlbumPhotos();
  }, []);
  return (
    <Container>
      <Text>{title}</Text>
      <Controls favourite={isfavourite} hideRead={true} onfavouritePress={onfavouritePress} onDetailsPress={onDetailsPress} onEditPress={onEditPress} />
      {
        details.length > 0 ?
        <Photos photos={details} />
        :
        <ActivityIndicator />
      }
    </Container>
  );
};