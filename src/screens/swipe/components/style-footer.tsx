import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../../variables";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Dimensions.get("window").height / 2.5,
  },
  title: {
    fontSize: 25,
    fontFamily: textFont.Medium,
    color: "#555",
    marginBottom: 30,
  },
  containerPosition: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 40,
  },
  containerPositionItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#ccc",
  },
  containerPositionItemActive: {
    backgroundColor: "#41bff5",
    width: 25,
  },
});
