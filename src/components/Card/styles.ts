import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  margin: 8px;
  padding-top: 16px;
  padding: 0 8px;
  padding-top: 8px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 0.2px;
  shadow-radius: 2px;
  elevation: 1px;
  ${({ isTablet }) =>
    isTablet &&
    `
      width: 767px;
    `}
`;
