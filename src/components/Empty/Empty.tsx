import React from "react";
import { Text } from "react-native";
import { TouchableIcon } from "../TouchableIcon";
import { Container } from "./styles";

export const Empty = () => (
  <Container>
    <Text>There is nothing to show!</Text>
    <TouchableIcon name="sad-outline" color="#000" />
  </Container>
);