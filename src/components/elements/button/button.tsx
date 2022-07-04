import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  onPress: () => void;
  title: string;
}

export const Button = ({ onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
