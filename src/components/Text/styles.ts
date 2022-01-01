import { Text as RNText } from "react-native";
import styled from "styled-components/native";
import { IText } from "./types";

export const Text = styled<IText>(RNText)`
  color: ${({ color }) => color};
  font-size: ${({ size }) => `${size}px`};
`;
