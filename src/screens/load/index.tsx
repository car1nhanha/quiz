import { MotiView } from "moti";
import React, { useEffect } from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { navigationProps } from "../../interfaces/navigation";
import { styles } from "./styles";

const retangle = require("../../assets/retangle.png");

export const Load = ({ navigation, route }: navigationProps) => {
  const nextScreen = () => {
    setTimeout(() => {
      navigation.navigate(route.params.nextScreen);
    }, 2000);
  };

  useEffect(() => {
    nextScreen();
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#41bff5"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground source={retangle} style={styles.iconContainer}>
          <MotiView
            from={{
              transform: [{ rotate: "0deg" }],
            }}
            animate={{
              transform: [{ rotate: "360deg" }],
            }}
            transition={{
              type: "timing",
              duration: 1000,
              repeatReverse: false,
              loop: true,
            }}
          >
            <Text style={styles.textIcon}>⏳</Text>
          </MotiView>
        </ImageBackground>
      </View>
    </>
  );
};
