import { useMediaQuery } from "react-responsive";
import { IUseMedia } from "./types";

export const useMedia = (): IUseMedia => {
  return {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 767 }),
    isDesktop: useMediaQuery({ minWidth: 992 }),
  };
};
