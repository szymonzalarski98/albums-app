import { IAlbum } from "../types";

export interface IAlbumsContext {
  favourites: IAlbum[];
  albums: IAlbum[];
  loading: boolean;
  handleFavourite: (id: number) => void;
  chckIfAlbumIsInfavouriteList: (id: number) => boolean;
  addNewAlbum: (title: string) => void;
  editAlbum: (id: number, title: string) => void;
}
