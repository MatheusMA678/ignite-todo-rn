import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as NavigationBar from "expo-navigation-bar";
import { Home } from "./src/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    inter: Inter_400Regular,
    interBold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  NavigationBar.setBackgroundColorAsync("#0D0D0D");

  return (
    <>
      <Home />
      <StatusBar style="light" translucent backgroundColor="#0D0D0D" />
    </>
  );
}
