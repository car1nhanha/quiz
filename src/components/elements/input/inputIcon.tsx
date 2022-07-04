import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";
import { styles } from "./styles";

interface Props {
  icon: any;
  placeholder: string;
}

export const InputIcon = ({ icon, placeholder }: Props) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text.toUpperCase())}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
};
