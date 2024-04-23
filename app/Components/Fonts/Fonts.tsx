import React from "react";
import styled from "styled-components/native";

// Componente de texto en negrita
export const BoldText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 18px;
`;

// Componente de texto delgado
export const ThinText = styled.Text`
  font-family: ${(props) => props.theme.fonts.thin};
  font-size: 16px;
`;


