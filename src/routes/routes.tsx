import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Home } from "../screens/home";
import { Load } from "../screens/load";
import { Login } from "../screens/login";
import { Preload } from "../screens/preload";
import { Question } from "../screens/question";
import { SwipeTemplate } from "../screens/swipe/swipeTemplate";
import { ToTest } from "../screens/toTest";

export const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);

  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="swipe" component={SwipeTemplate} />
        <AppStack.Screen name="home" component={Home} />
        <AppStack.Screen name="totest" component={ToTest} />
        <AppStack.Screen name="login" component={Login} />
        <AppStack.Screen name="load" component={Load} />
        <AppStack.Screen name="preload" component={Preload} />
        <AppStack.Screen name="question" component={Question} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
