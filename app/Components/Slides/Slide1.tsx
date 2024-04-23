import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { BoldText, ThinText } from "../../Components/Fonts/Fonts";
import styles from "./styles";

const Slide1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldText style={styles.title}>Train to ease your mind</BoldText>
        <ThinText style={styles.subtitle}>
          Easy-to-follow exercises combining Virtual Reality, mindfulness,
          coaching and much more!
        </ThinText>
      </View>
    </View>
  );
};

export default Slide1;
