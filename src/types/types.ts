export interface IAlbum {
  id: number;
  title: string;
}

export interface IPhoto {
  albumID: number;
  id: number;
  title: string;
  url: string;
}
