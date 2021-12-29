import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddAlbum } from "../screens/AddAlbum";
import { Albums } from "../screens/Albums";
import { Details } from "../screens/Details";
import { EditAlbum } from "../screens/EditAlbum";

const Stack = createNativeStackNavigator();

export const AlbumsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen  name="Albums" component={Albums} options={{ headerShown: false }} />
    <Stack.Screen  name="Edit" component={EditAlbum} options={{ headerShown: false }} />
    <Stack.Screen  name="Add" component={AddAlbum} options={{ headerShown: false }} />
    <Stack.Screen  name="Details" component={Details} options={{ headerShown: false }} />
  </Stack.Navigator>
);