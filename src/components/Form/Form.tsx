import React, { useContext, useState, FunctionComponent } from "react";
import { AlbumsContext } from "../../context/albumsContext";
import { useNavigationHook } from "../../hooks";
import { AddButton } from "../AddButton";
import { Input } from "../Input";
import { Container, ButtonContainer } from "./styles";
import { IForm } from "./types";

const REGEX = /^[A-Za-z ]+$/;
const ERROR_MESSAGE = "The title can only consist of letters and spaces!";

export const Form: FunctionComponent<IForm> = ({ id, title: albumTitle }) => {
  const { addNewAlbum, editAlbum } = useContext(AlbumsContext);
  const { redirectToAlbumsScreen } = useNavigationHook();
  const [title, setTitle] = useState<string>(albumTitle ?? "");
  const [error, setError] = useState<string | null>(null);
  const onChange = (text: string) => {
    setTitle(text);
    if (!text.match(REGEX)) {
      setError(ERROR_MESSAGE)
    } else {
      setError(null);
    }
  };
  const handleAddAlbum = () => {
    if (id) {
      editAlbum(id, title);
    } else {
      addNewAlbum(title);
    }
    redirectToAlbumsScreen();
  };
  const isButtonDisabled = error !== null;
  return (
    <Container>
      <Input placeholder="Album title" value={title} onChange={onChange} error={error} />
      <ButtonContainer testID="button-container">
        <AddButton disabled={isButtonDisabled} onPress={handleAddAlbum} />
      </ButtonContainer>
    </Container>
  );
};