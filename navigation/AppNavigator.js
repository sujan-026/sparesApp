import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import SparesByBike from "../screens/SparesByBike";
import PartsScreen from "../screens/PartsScreen";
import SubMenuScreen from "../screens/SubMenuScreen";
import BikesModelScreen from "../screens/BikesModelScreen";
// import SparesByCategory from "../screens/SparesByCategory";
// import BikeBodyParts from "../screens/BikeBodyParts";
// import AboutUs from "../screens/AboutUs";
// import Blogs from "../screens/Blogs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SparesByBike" component={SparesByBike} />
        <Stack.Screen name="PartsScreen" component={PartsScreen} />
        <Stack.Screen name="SubMenuScreen" component={SubMenuScreen} />
        <Stack.Screen name="BikesModelScreen" component={BikesModelScreen} />
        {/* <Stack.Screen name="SparesByCategory" component={SparesByCategory} />
        <Stack.Screen name="BikeBodyParts" component={BikeBodyParts} /> */}
        {/* <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Blogs" component={Blogs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
