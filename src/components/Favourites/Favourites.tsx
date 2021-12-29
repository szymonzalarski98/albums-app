import React, { useContext } from "react";
import { AlbumsContext } from "../../context/albumsContext";
import { IAlbum } from "../../types";
import { Card } from "../Card";
import { List } from "../List";

export const Favourites = () => {
  const { favourites } = useContext(AlbumsContext);
  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }: { item: IAlbum }) => {
    return <Card id={item.id} title={item.title} favourite={true} />;
  }
  return (
    <List data={favourites} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};