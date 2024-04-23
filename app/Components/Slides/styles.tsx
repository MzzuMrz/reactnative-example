import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32C0EB",
  },
  hand: {
    position: "absolute",
    top: -50,
    left: -245,
    flex: 1,
    width: 900,
    height: 900,
    resizeMode: "contain",
  },
  hand2: {
    position: "absolute",
    bottom: 100,
    left: 30,
    width: 450,
    height: 450,
    resizeMode: "contain",
  },
  hand3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 70,
    width: 400,
    height: 600,
    resizeMode: "contain",
  },
  logo: {
    position: "absolute",
    top: 80,
    width: "40%",
    resizeMode: "contain",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    top: 635,
    paddingRight: 20,
    paddingLeft: 30,
  },
  title: {
    lineHeight: 34.5,
    fontSize: 30,
    color: "white",
  },
  subtitle: {
    lineHeight: 20,
    color: "white",
    fontSize: 15,
  },
  titleContainer2: {
    position: "absolute",
    top: 570,
    paddingRight: 20,
    paddingLeft: 30,
  },
  titleContainer3: {
    position: "absolute",
    top: 550,
    paddingRight: 20,
    paddingLeft: 30,
  },
  visor: {
    position: "absolute",
    bottom: 350,
    left: -250,
    height: "60%",
    resizeMode: "contain",
    opacity: 1,
  },
});

export default styles;
