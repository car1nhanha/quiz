import { MotiView } from "moti";
import React from "react";
import { Text } from "react-native";
import { CardSwipe } from "./cardSwipe";
import { Footer } from "./components/footer";
import { Props } from "./interfaceSwipe";
import { styles } from "./styles";

export const FirstSwipe = ({ index, nextIndex }: Props) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={styles.containerSwipeScreen}
    >
      <CardSwipe>
        <Text style={styles.textIcon}>👋</Text>
      </CardSwipe>
      <Footer index={index} nextIndex={nextIndex} title="Bem vindo ao Quiz!">
        <Text style={styles.textFooter}>
          Obrigado por fazer o download do Quiz!{"\n"}Prosiga para o próximo
          passo.
        </Text>
      </Footer>
    </MotiView>
  );
};
