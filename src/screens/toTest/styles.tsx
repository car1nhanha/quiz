import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../variables";

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#41bff5",
    height: Dimensions.get("window").height,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: "#f8feff",
    marginTop: Dimensions.get("window").height * 0.15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconContainerRow: {
    width: "100%",
    alignItems: "center",
    marginVertical: Dimensions.get("window").width * 0.18,
  },
  iconContainer: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  textIcon: {
    fontSize: 40,
  },
  //
  body: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textTitle: {
    fontSize: 25,
    fontFamily: textFont.Regular,
    color: "#444",
  },
  textCode: {
    fontSize: 16,
    fontFamily: textFont.Regular,
    borderRadius: 20,
    overflow: "hidden",
    color: "#44c9f2",
    backgroundColor: "#e5f8fe",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  containerHorario: {
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
  },
  smallText: {
    fontSize: 14,
    fontFamily: textFont.Light,
    color: "#777",
    marginBottom: 10,
  },
  time: {
    fontSize: 20,
    fontFamily: textFont.Regular,
    color: "#444",
    backgroundColor: "#f3fbfe",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  textTime: {
    fontSize: 20,
  },
  //
  containerButton: {
    marginTop: 60,
    marginHorizontal: 20,
    flex: 1,
  },
});
