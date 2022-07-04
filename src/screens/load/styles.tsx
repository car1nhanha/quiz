import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#41bff5",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  textIcon: {
    fontSize: 32,
  },
  iconContainer: {
    height: 130,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});
