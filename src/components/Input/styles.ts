import styled from "styled-components/native";
import { TextInput, Text } from "react-native";

export const Input = styled(TextInput)`
  border-radius: 5px;
  ${({ error }) =>
    error &&
    `
    border: 1px solid #ff3333;
  `}
  shadow-color: #000;
  shadow-opacity: 0.2px;
  shadow-radius: 2px;
  elevation: 1px;
  padding: 16px;
`;

export const ErrorText = styled(Text)`
  color: #ff3333;
`;
