import React, { FunctionComponent } from "react";
import { ErrorText, Input as InputComponent } from "./styles";
import { IInput } from "./types";

export const Input: FunctionComponent<IInput> = ({ value, onChange, error, placeholder }) => (
  <>
    <InputComponent testID="input" placeholder={placeholder} value={value} onChangeText={onChange} error={error} type="text" />
    {error && <ErrorText>{error}</ErrorText>}
  </>
);