import React from "react";
import { Pressable, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { BoldText, ThinText } from "../Fonts/Fonts";

// Definición de las props del componente
type CustomButtonProps = {
  title: string;
  textType: "bold" | "thin";
  onPress: () => void;
  large: number;
};

// Componente CustomButton
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  textType,
  onPress,
  large,
}) => {
  // Selecciona el tipo de texto según la prop textType
  const TextComponent = textType === "bold" ? BoldText : ThinText;

  const dynamicButtonStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: large,
    borderRadius: 14,
    elevation: 3,
    backgroundColor: "white",
  };

  return (
    <Pressable style={dynamicButtonStyle} onPress={onPress}>
      <TextComponent style={styles.text}>{title}</TextComponent>
    </Pressable>
  );
};

// Estilos estáticos para el texto
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "black",
  },
});

export default CustomButton;
