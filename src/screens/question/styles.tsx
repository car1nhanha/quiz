import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../variables";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#41bff5",
    minHeight: Dimensions.get("window").height,
    flex: 1,
  },
  containerLogin: {
    height: "100%",
    backgroundColor: "#f0f4f7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  //
  header: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
  },
  textTitleHeader: {
    fontSize: 17,
    fontFamily: textFont.Regular,
    color: "#fff",
  },
  timer: {
    fontSize: 15,
    fontFamily: textFont.Light,
    color: "#fff",
    backgroundColor: "#60d5f6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 17,
    overflow: "hidden",
  },
  bodyQuestion: {
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
  },
  questionText: {
    fontSize: 15,
    fontFamily: textFont.Regular,
    color: "#444",
    lineHeight: 23,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  // iconContainer: {
  //   height: 150,
  //   width: 150,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingTop: 20,
  // },
  // textIcon: {
  //   fontSize: 40,
  // },
  //
  body: {
    alignContent: "center",
    paddingVertical: 20,
  },
  containerQuestion: {
    marginVertical: 10,
    backgroundColor: "#f6fbff",
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  containerQuestionSelected: {
    backgroundColor: "#45ccf7",
  },
  textQuestion: {
    fontSize: 15,
    fontFamily: textFont.Light,
    color: "#444",
  },
  textQuestionSelected: {
    color: "#fff",
    fontFamily: textFont.Bold,
  },
  //
  containerButton: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  //
  containerConfirm: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
  },
  containerConfirmButton: {
    marginTop: 0,
    marginHorizontal: 20,
  },
  textTitleConfirm: {
    fontSize: 17,
    fontFamily: textFont.Regular,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  textDescriptionConfirm: {
    fontSize: 15,
    fontFamily: textFont.Light,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  textCancel: {
    fontSize: 15,
    fontFamily: textFont.Light,
    color: "#45ccf7",
    textAlign: "center",
    marginTop: 20,
  },
});
