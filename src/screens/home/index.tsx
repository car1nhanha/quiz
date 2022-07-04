import { MotiView } from "moti";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { navigationProps } from "../../interfaces/navigation";
import { styles } from "./styles";

const bg = require("../../assets/bg-card.png");

export const Home = ({ navigation }: navigationProps) => {
  const Question = ({ icon }: any) => {
    return (
      <TouchableOpacity
        style={styles.containerQuestion}
        onPress={() => {
          navigation.navigate("totest");
        }}
      >
        <Text style={styles.icon}>{icon}</Text>
        <View style={styles.containerQuestionDescription}>
          <Text style={styles.QuestionTitle}>Sinalização</Text>
          <Text style={styles.QuestionDescription}>A45BD21</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.helloContainer}>
        <View style={styles.hello}>
          <Text style={styles.helloText}>
            👋 Olá, <Text style={styles.bold}>34568</Text>!
          </Text>
        </View>
      </View>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <Text style={styles.title}>Quiz Detran</Text>
        <Text style={styles.description}>
          Evolua seu nível de conhecimento e esteja preparado para o teste.
        </Text>
      </ImageBackground>

      <MotiView
        from={{
          opacity: 0,
          marginTop: 200,
        }}
        animate={{
          opacity: 1,
          marginTop: 0,
        }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
        style={styles.listQuestions}
      >
        <Text style={styles.listTitle}>Questões</Text>
        <Question icon="⚠️" />
        <Question icon="🚗" />
        <Question icon="🚚" />
      </MotiView>
    </ScrollView>
  );
};
