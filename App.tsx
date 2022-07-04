import {
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import { AppContext } from "./src/context/appContext";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [answerList, setAnswerList] = useState([]);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <AppContext.Provider
        value={{
          questions,
          setQuestions,
          answerList,
          setAnswerList,
        }}
      >
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </AppContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
