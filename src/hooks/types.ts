export interface IUseMedia {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface IUseNavigationHook {
  redirectToEditPostScreen: (albumId: number, title: string) => void;
  redirectToDetailsPostScreen: (albumId: number, title: string) => void;
  redirectToAddAlbumScreen: () => void;
  redirectToAlbumsScreen: () => void;
}
