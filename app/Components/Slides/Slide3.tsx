import React from "react";
import { View, Image, Animated } from "react-native";
import { BoldText, ThinText } from "../../Components/Fonts/Fonts";
import styles from "./styles"; // Importa los estilos compartidos

const Slide3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer3}>
        <BoldText style={styles.title}>
          A 8-week plan to manage your stress levels
        </BoldText>
        <ThinText style={styles.subtitle}>
          Follow up on your progress and become who you want to be
        </ThinText>
      </View>
    </View>
  );
};

export default Slide3;
