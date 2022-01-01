import React, { FunctionComponent } from "react";
import { Image as RNImage } from "react-native";
import { useMedia } from "../../hooks";
import { ImageComponent } from "./styles";
import { IImage } from "./types";

export const Image: FunctionComponent<IImage> = ({ uri }) => {
  const { isMobile } = useMedia();
  const imageWidth = isMobile ? 300 : 600;
  return <ImageComponent source={{ uri }} width={imageWidth} />
};