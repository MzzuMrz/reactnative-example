import * as Font from "expo-font";

export default async function useFonts() {
  await Font.loadAsync({
    "Inter-Bold": require("../assets/fonts/otf/Inter-Black.otf"), 
    "Inter-Thin": require("../assets/fonts/otf/Inter.ttf"), 
  });
}
