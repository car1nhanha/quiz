import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../../variables";

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: "#41c0f6",
    borderRadius: 20,
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  input: {
    fontSize: 18,
    color: "#555",
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontFamily: textFont.Regular,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
