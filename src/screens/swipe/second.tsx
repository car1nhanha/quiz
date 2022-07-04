import { MotiView } from "moti";
import React from "react";
import { Text } from "react-native";
import { CardSwipe } from "./cardSwipe";
import { Footer } from "./components/footer";
import { Props } from "./interfaceSwipe";
import { styles } from "./styles";

export const SecondSwipe = ({ index, nextIndex }: Props) => {
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
        <Text style={styles.textIcon}>👩‍🎓</Text>
      </CardSwipe>
      <Footer index={index} nextIndex={nextIndex} title="Dezenas de questões!">
        <Text style={styles.textFooter}>
          Questionários baseados em provas anteriores do Detram. Contamos com
          mais de 29 questões.
        </Text>
      </Footer>
    </MotiView>
  );
};
