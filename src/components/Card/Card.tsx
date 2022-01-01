import React, { FunctionComponent, useContext } from "react";
import { Text } from "../Text";
import { AlbumsContext } from "../../context/albumsContext";
import { useNavigationHook, useMedia } from "../../hooks";
import { Controls } from "../Controls";
import { Container } from "./styles";
import { ICard } from "./types";

export const Card: FunctionComponent<ICard> = ({ id, title, favourite }) => {
  const { handleFavourite } = useContext(AlbumsContext);
  const { redirectToDetailsPostScreen, redirectToEditPostScreen } = useNavigationHook();
  const { isTablet } = useMedia();
  const onfavouritePress = () => handleFavourite(id);
  const onDetailsPress = () => redirectToDetailsPostScreen(id, title);
  const onEditPress = () => redirectToEditPostScreen(id, title);
  return (
    <Container isTablet={isTablet}>
      <Text>{title}</Text>
      <Controls favourite={favourite} onfavouritePress={onfavouritePress} onDetailsPress={onDetailsPress} onEditPress={onEditPress} />
    </Container>
  );
};