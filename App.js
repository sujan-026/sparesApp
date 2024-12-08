// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import PartsScreen from "./screens/PartsScreen";
// import MenuPage from "./components/MenuPage";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Parts" component={PartsScreen} />
//         <Stack.Screen name="MenuPage" component={MenuPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from "react";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
