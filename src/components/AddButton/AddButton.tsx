import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { IAddAlbum } from "./types";

export const AddButton: FunctionComponent<IAddAlbum> = ({ onPress, disabled = false }) => (
  <Container testID="add-button" disabled={disabled} onPress={onPress}>
    <Text style={{ color: "#FFF" }}>Add album</Text>
  </Container>
);