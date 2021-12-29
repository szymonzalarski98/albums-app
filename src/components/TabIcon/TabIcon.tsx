import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ITabIcon } from "./types";

export const TabIcon: FunctionComponent<ITabIcon> = ({ focused, size, name, color }) => {
  const iconName = focused ? name : `${name}-outline`;
  return (
    <Ionicons name={iconName} size={size} color={color} />
  );
};