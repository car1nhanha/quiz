import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../variables";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#41bff5",
    height: Dimensions.get("window").height,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: Dimensions.get("window").height * 0.15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconContainerRow: {
    width: "100%",
    alignItems: "center",
    marginTop: -60,
  },
  iconContainer: {
    height: 130,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  textIcon: {
    fontSize: 32,
  },
  //
  headerTitleLogin: {
    marginTop: 20,
    backgroundColor: "#e2f3fa",
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleLogin: {
    fontSize: 20,
    fontFamily: textFont.Medium,
    backgroundColor: "#41bff5",
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 30,
    overflow: "hidden",
    color: "#fff",
  },
  // input
  containerInput: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  titleInput: {
    fontSize: 15,
    fontFamily: textFont.Thin,
    color: "#555",
    marginBottom: 10,
  },
  containerButton: {
    marginTop: 60,
    marginHorizontal: 20,
  },
});
