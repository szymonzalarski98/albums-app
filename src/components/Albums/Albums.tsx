import React, { useContext } from "react";
import { AlbumsContext } from "../../context/albumsContext";
import { useNavigationHook } from "../../hooks";
import { IAlbum } from "../../types";
import { AddButton } from "../AddButton";
import { Card } from "../Card";
import { List } from "../List";
import { ButtonContainer } from "./styles";

export const Albums = () => {
  const { albums, chckIfAlbumIsInfavouriteList } = useContext(AlbumsContext);
  const { redirectToAddAlbumScreen } = useNavigationHook();
  const keyExtractor = (item: IAlbum) => item.id.toString();
  const renderItem = ({ item }: { item: IAlbum }) => {
    const isfavourite = chckIfAlbumIsInfavouriteList(item.id);
    return  <Card id={item.id} title={item.title} favourite={isfavourite} />;
  };
  return (
    <>
      <ButtonContainer>
        <AddButton onPress={redirectToAddAlbumScreen} />
      </ButtonContainer>
      <List data={albums} keyExtractor={keyExtractor} renderItem={renderItem} />
    </>
  );
};