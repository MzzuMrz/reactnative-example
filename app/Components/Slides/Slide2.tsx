import React from "react";
import { View, Animated } from "react-native";
import { BoldText, ThinText } from "../../Components/Fonts/Fonts";
import styles from "./styles"; // Importa los estilos compartidos

const Slide2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer2}>
        <BoldText style={styles.title}>
          This program is 4x more effective than most alternatives
        </BoldText>
        <ThinText style={styles.subtitle}>
          Train yourself in virtual environments to practice controlling your
          stress
        </ThinText>
      </View>
    </View>
  );
};

export default Slide2;
