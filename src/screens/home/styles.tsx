import { Dimensions, StyleSheet } from "react-native";
import { textFont } from "../../variables";

export const styles = StyleSheet.create({
  helloContainer: {
    alignItems: "center",
  },
  hello: {
    marginVertical: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  helloText: {
    fontFamily: textFont.Regular,
  },
  bold: {
    fontFamily: textFont.Bold,
  },
  //
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    height: Dimensions.get("window").width * 0.4,
    padding: 20,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 40,
  },
  title: {
    fontFamily: textFont.Regular,
    fontSize: 20,
    color: "#fff",
    marginBottom: 15,
  },
  description: {
    fontFamily: textFont.Regular,
    fontSize: 15,
    color: "#fff",
    lineHeight: 25,
  },
  //
  listQuestions: {
    marginTop: 20,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
  },
  listTitle: {
    fontFamily: textFont.Medium,
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  //
  containerQuestion: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
  },
  containerQuestionDescription: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    fontSize: 25,
  },
  QuestionTitle: {
    fontFamily: textFont.Medium,
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 8,
    color: "#000",
  },
  QuestionDescription: {
    fontFamily: textFont.Regular,
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
    marginLeft: 10,
  },
});
