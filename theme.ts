import styled from "styled-components/native";

interface Theme {
  fonts: {
    bold: string;
    thin: string;
  };
}

const theme: Theme = {
  fonts: {
    bold: "Inter-Bold",
    thin: "Inter-Thin",
  },
};

export default theme;
