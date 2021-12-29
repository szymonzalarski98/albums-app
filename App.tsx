import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { AlbumsContextProvider } from "./src/context/albumsContext";
import { Navigator } from "./src/navigation/Navigator";

export default function App() {
  return (
    <ToastProvider>
      <AlbumsContextProvider>
          <Navigator />
      </AlbumsContextProvider>
    </ToastProvider>
  );
};