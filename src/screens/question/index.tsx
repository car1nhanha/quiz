import { MotiView, View } from "moti";
import React, { useContext, useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/elements/button/button";
import { AppContext } from "../../context/appContext";
import { navigationProps } from "../../interfaces/navigation";
import { styles } from "./styles";

const bg = require("../../assets/bg-card.png");

export const Question = ({ navigation, route }: navigationProps) => {
  const { questions, answerList, setAnswerList } = useContext(AppContext);

  const [answer, setAnswer] = React.useState("");
  const [question, setQuestion] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [onConfirm, setOnConfirm] = React.useState(false);

  const handleQuestion = () => {
    if (answer) {
      questions?.perguntas[index].correta
        ? setAnswerList([...answerList, true])
        : setAnswerList([...answerList, false]);
      setIndex(index + 1);
      setAnswer("");
      setOnConfirm(false);
    } else {
      alert("Marque uma opção");
    }
  };

  const confirmAnswer = () => {
    answer ? setOnConfirm(true) : alert("Marque uma opção");
  };

  useEffect(() => {
    setQuestion(questions?.perguntas[index].respostas);
  }, [index]);

  const Question = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={[
          styles.containerQuestion,
          item === answer && styles.containerQuestionSelected,
        ]}
        onPress={() => setAnswer(item)}
      >
        <Text
          style={[
            styles.textQuestion,
            item === answer && styles.textQuestionSelected,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#41bff5"
        barStyle="light-content"
      />
      <ScrollView>
        <ImageBackground source={bg} style={styles.container}>
          {/* icone */}
          <View style={styles.header}>
            <View style={styles.rowHeader}>
              <Text style={styles.textTitleHeader}>Teste de sinalização</Text>
              <Text style={styles.timer}>30:00</Text>
            </View>
            <View style={styles.bodyQuestion}>
              <Text style={styles.questionText}>
                {index + 1} - {questions?.perguntas[index].questao}
              </Text>
              {questions?.perguntas[index]?.image?.length > 0 && (
                <Image
                  source={{ uri: questions?.perguntas[index].image }}
                  style={styles.image}
                />
              )}
            </View>
          </View>

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
            style={styles.containerLogin}
          >
            {/* Button */}
            <View style={styles.body}>
              {question.map((item: any, index: number) => (
                <Question key={index} item={item} />
              ))}
            </View>
            <View style={styles.containerButton}>
              <Button
                title={
                  index === questions?.perguntas.length - 1
                    ? "Finalizar"
                    : "Próximo"
                }
                onPress={confirmAnswer}
              />
            </View>
          </MotiView>
          {onConfirm && answer && (
            <MotiView
              from={{
                opacity: 0,
                bottom: -100,
              }}
              animate={{
                opacity: 1,
                bottom: 0,
              }}
              transition={{
                type: "timing",
                duration: 500,
              }}
              style={styles.containerConfirm}
            >
              <Text style={styles.textTitleConfirm}>Confirmar resposta?</Text>
              <Text style={styles.textDescriptionConfirm}>
                Não será possível alterar a resposta.
              </Text>
              <View style={styles.containerConfirmButton}>
                <Button title={"Confirmar"} onPress={handleQuestion} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setOnConfirm(false);
                }}
              >
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>
            </MotiView>
          )}
        </ImageBackground>
      </ScrollView>
    </>
  );
};
