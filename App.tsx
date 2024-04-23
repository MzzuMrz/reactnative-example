import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading"; 
import {
  AutoEnvAttributes,
  LDProvider,
  ReactNativeLDClient,
} from "@launchdarkly/react-native-client-sdk";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";

import useFonts from "./hooks/useFonts"; 

import WelcomeScreen from "./app/Screens/Welcome/Welcome";
import Splash from "./app/Screens/Splash/Splash";
import theme from "./theme";

const featureClient = new ReactNativeLDClient(
  "mob-c41e16b5-4225-4795-b6f0-79f35facbc61",
  AutoEnvAttributes.Enabled,
  {
    debug: true,
    applicationInfo: {
      id: "ld-rn-test-app",
      version: "0.0.1",
    },
  }
);

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await useFonts();
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LDProvider client={featureClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </LDProvider>
  );
};

export default App;
