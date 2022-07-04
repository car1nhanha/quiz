import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../../variables";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#41bff5",
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 40,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: textFont.Medium,
    color: "#fff",
  },
});
