import React, { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import { Image } from "../Image";
import { Container } from "./styles";
import { IPhotos } from "./types";

export const Photos: FunctionComponent<IPhotos> = ({ photos }) => (
  <ScrollView>
    <Container>
      {photos.map((item) => (
        <Image key={item.id} uri={item.url} />
      ))}
    </Container>
  </ScrollView>
);
