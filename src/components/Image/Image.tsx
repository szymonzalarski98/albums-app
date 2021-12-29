import React from "react";
import { Image as RNImage } from "react-native";
import { useMedia } from "../../hooks";

export const Image = ({ uri }) => {
  const { isMobile } = useMedia();
  const imageWidth = isMobile ? 300 : 600;
  return <RNImage source={{ uri }} style={{ width: imageWidth, aspectRatio: 1 }} />
};