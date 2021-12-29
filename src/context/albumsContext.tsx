import React, { useState, useEffect, createContext } from "react";
import { useToast } from "react-native-toast-notifications";
import { getAlbums } from "../api";
import { IAlbum } from "../types";
import { IAlbumsContext } from "./types";

const TOAST_TEXT = "Gratulujemy! Dodałeś dzisiaj już 5 albumów do ulubionych";

export const AlbumsContext = createContext<IAlbumsContext>({} as any);

export const AlbumsContextProvider = ({ children }) => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(true);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [favouritesIds, setfavouritesIds] = useState<number[]>([]);
  const handleFavourite = (albumId: number) => {
    if (favouritesIds.includes(albumId)) {
      setfavouritesIds(favouritesIds.filter((item) => item !== albumId));
    } else {
      setfavouritesIds([albumId, ...favouritesIds]);
    }
  };
  const addNewAlbum = (title: string) => {
    const lastId = Math.max.apply(Math, albums.map((album) => album.id))
    const id = lastId + 1;
    const newAlbumObject = {
      title,
      id: id,
    };
    setAlbums([newAlbumObject, ...albums]);
  };
  const editAlbum = (id: number, title: string) => {
    setAlbums(albums.map((item) => item.id === id ? { ...item, title } : item));
  };
  const chckIfAlbumIsInfavouriteList = (albumId: number) => favouritesIds.includes(albumId);
  const favourites = albums.filter((item: IAlbum) => favouritesIds.includes(item.id));
  const fetchAlbumsData = async () => {
    try {
      const data = await getAlbums();
      setAlbums(data);
      setLoading(false);
    } catch(e) {
      alert(e);
    }
  };
  const showToast = () => toast.show(TOAST_TEXT, { placement: "top" });
  useEffect(() => {
   fetchAlbumsData();
  }, []);
  useEffect(() => {
    if (favouritesIds.length === 5) {
      showToast();
    }
  }, [favouritesIds]);
  return (
    <AlbumsContext.Provider value={{ favourites, albums, loading, handleFavourite, chckIfAlbumIsInfavouriteList, addNewAlbum, editAlbum }}>
      {children}
    </AlbumsContext.Provider>
  );
};