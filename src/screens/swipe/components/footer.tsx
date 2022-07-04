import { MotiView } from "moti";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/elements/button/button";
import { styles } from "./style-footer";

interface Props {
  children: any;
  index: number;
  nextIndex: () => void;
  title: string;
}

export const Footer = ({ children, index, nextIndex, title }: Props) => {
  const generateArray = (length: number) => {
    const array = Array.from(Array(length).keys());
    return array;
  };

  return (
    <MotiView
      from={{ opacity: 0, marginRight: -100 }}
      animate={{ opacity: 1, marginRight: 0 }}
      transition={{ duration: 1, type: "timing" }}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      {children}
      <View style={styles.containerPosition}>
        {generateArray(3).map((item, i) => (
          <View
            key={i}
            style={[
              styles.containerPositionItem,
              index === i ? styles.containerPositionItemActive : null,
            ]}
          />
        ))}
      </View>
      <Button
        onPress={() => nextIndex()}
        title={index === 2 ? "Finalizar" : "Próximo"}
      />
    </MotiView>
  );
};
