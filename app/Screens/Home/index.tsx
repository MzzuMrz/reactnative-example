import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import React from "react";


export default function Page() {
  const appName = Constants?.expoConfig?.extra?.appName;
  const color = Constants?.expoConfig?.extra?.color;


  console.log(appName)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={{
          fontSize: 42,
          color: color,
        }}>{appName || 'example Health TEST EAS'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});
