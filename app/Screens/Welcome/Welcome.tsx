import React from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";

import { ThinText } from "../../Components/Fonts/Fonts";
import { Slide1, Slide2, Slide3 } from "../../Components/Slides/index";
import CustomButton from "../../Components/Button/CustomButton";
import styles from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Swiper horizontal pagingEnabled showsHorizontalScrollIndicator={true}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Swiper>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Get Started"
          textType="bold"
          large={140}
          onPress={() => console.log("Pressed!")}
        />
        <ThinText style={styles.contactTitle}>Contact support</ThinText>
      </View>
    </View>
  );
};

export default Welcome;
