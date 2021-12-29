import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";
import { useMedia } from "../../hooks";
import { Empty } from "../Empty";
import { IList } from "./types";

export const List: FunctionComponent<IList> = ({ data, renderItem, keyExtractor  }) => {
  const { isTablet } = useMedia();
  const emptyListComponent = <Empty />;
  return (
    <FlatList
      contentContainerStyle={{ alignItems: isTablet ? "center" : "stretch" }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={emptyListComponent}
    /> 
  );
};