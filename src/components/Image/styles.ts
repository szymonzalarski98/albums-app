import { Image } from "react-native";
import styled from "styled-components/native";

interface IImageComponent {
  width: number;
}

export const ImageComponent = styled<IImageComponent>(Image)`
  aspect-ratio: 1;
  margin: 4px;
  border-radius: 5px;
  width: ${({ width }) => `${width}px`};
`;
