import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32C0EB",
  },
  visor: {
    position: "absolute",
    bottom: 350,
    left: -250,
    height: "60%",
    resizeMode: "contain",
    opacity: 1,
  },
  luminosityOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#32C0EB",
    opacity: 0.5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    bottom: 425,
    width: "60%",
    resizeMode: "contain",
  },
  hand: {
    position: "absolute",
    bottom: 90,
    left: 76,
    width: "100%",
    resizeMode: "contain",
  },
});

export default styles;
