import React from "react";
import { Text as TextComponent } from "./styles";
import { TextSize } from "./types";

export const Text = ({ color = "#000", size = TextSize.Medium, children}) => <TextComponent size={size} color={color}>{children}</TextComponent>;