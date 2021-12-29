import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AlbumsNavigator } from "./AlbumsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Favourites } from "../screens/Favourites";
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: [""],
  config: {
    screens: {
      Albums:  "",
      favourites: "favourites",
      Details: "album/:albumId",
      Edit: "album/:albumId/edit",
    }
  },
};

export const TabsNavigator = () => (
  <NavigationContainer linking={linking}>
    <Tab.Navigator>
      <Tab.Screen
        name="Albums"
        component={AlbumsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <TabIcon {...props} name="albums" />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <TabIcon {...props} name="bookmark" />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
