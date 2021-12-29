import React, { FunctionComponent } from "react";
import { TouchableIcon } from "../TouchableIcon";
import { Container } from "./styles";
import { IControls } from "./types";

export const Controls: FunctionComponent<IControls> = ({ hideRead = false, favourite, onDetailsPress, onEditPress, onfavouritePress }) => {
  const favouriteIcon = favourite ? "star" : "star-outline";
  return (
    <Container>
      {!hideRead && <TouchableIcon testID="details" name="book-outline" color="#000" onPress={onDetailsPress} />}
      <TouchableIcon testID="edit" name="create-outline" color="#000" onPress={onEditPress} />
      <TouchableIcon testID="favourite" name={favouriteIcon} color="#000" onPress={onfavouritePress} />
    </Container>
  );
};