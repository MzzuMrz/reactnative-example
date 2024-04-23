import React, { useEffect } from "react";
import { View, Animated } from "react-native";
import styles from './styles'


const Splash = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
   
    </View>
  );
};


export default Splash;
