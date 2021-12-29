import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ITouchableIcon } from "./types";
import { Container } from "./styles";

export const TouchableIcon: FunctionComponent<ITouchableIcon> = ({ testID, name, onPress, color }) => (
  <Container onPress={onPress}>
    <Ionicons name={name as any} color={color} size={24} />
  </Container>
);