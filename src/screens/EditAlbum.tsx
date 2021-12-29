import React from "react";
import { Form } from "../components";

export const EditAlbum = ({ route }) => {
  return <Form id={route.params.albumId} title={route.params.title} />
};