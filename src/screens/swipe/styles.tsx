import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../variables";

export const styles = StyleSheet.create({
  containerSwipeScreen: {
    minHeight: "100%",
    backgroundColor: "#eee",
  },
  container: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width - 80,
    marginHorizontal: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    alignItems: "center",
    marginTop: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  retangle: {
    height: 120,
    width: 120,
    marginTop: -70,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  textIcon: {
    fontSize: 30,
  },
  textFooter: {
    fontSize: 15,
    color: "#777",
    fontFamily: textFont.Light,
    lineHeight: 30,
    textAlign: "center",
  },
});
