import React from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";

const bg = require("../../assets/bg-card.png");
const retangle = require("../../assets/retangle.png");

interface Props {
  children: React.ReactNode;
}

export const CardSwipe = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={retangle} style={styles.retangle}>
        {children}
      </ImageBackground>
      <ImageBackground source={bg} style={styles.backgroundImage} />
    </View>
  );
};
