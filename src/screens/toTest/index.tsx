import { MotiView, View } from "moti";
import React, { useContext, useEffect } from "react";
import { ImageBackground, StatusBar, Text } from "react-native";
import { Button } from "../../components/elements/button/button";
import { AppContext } from "../../context/appContext";
import { navigationProps } from "../../interfaces/navigation";
import mock from "../../mock/perguntas.json";
import { styles } from "./styles";

const retangle = require("../../assets/retangle.png");
const bg = require("../../assets/bg-card.png");

export const ToTest = ({ navigation }: navigationProps) => {
  const { setQuestions } = useContext(AppContext);

  const handleLogin = () => {
    navigation.navigate("question");
  };

  useEffect(() => {
    setQuestions(mock[0]);
  }, []);

  // setar as perguntas no context

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#41bff5"
        barStyle="light-content"
      />
      <ImageBackground source={bg} style={styles.container}>
        {/* icone */}
        <View style={styles.iconContainerRow}>
          <ImageBackground source={retangle} style={styles.iconContainer}>
            <Text style={styles.textIcon}>👩🏻‍🏫</Text>
          </ImageBackground>
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
            <Text style={styles.textTitle}>Vamos lá?</Text>

            <Text style={styles.textCode}>A5DAB459 - Teste de sinalização</Text>

            <View style={styles.containerHorario}>
              <Text style={styles.smallText}>Tempo estimado</Text>

              <Text style={styles.time}>
                ⏰ 30 <Text style={styles.textTime}>min</Text>
              </Text>
            </View>
          </View>
          <View style={styles.containerButton}>
            <Button title="Inicia" onPress={handleLogin} />
          </View>
        </MotiView>
      </ImageBackground>
    </>
  );
};
