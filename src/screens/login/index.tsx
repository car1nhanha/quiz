import { MotiView, View } from "moti";
import React from "react";
import { ImageBackground, StatusBar, Text } from "react-native";
import { Button } from "../../components/elements/button/button";
import { InputIcon } from "../../components/elements/input/inputIcon";
import { navigationProps } from "../../interfaces/navigation";
import { styles } from "./styles";

const retangle = require("../../assets/retangle.png");
const lock = require("../../assets/lock.png");

export const Login = ({ navigation }: navigationProps) => {
  const handleLogin = () => {
    navigation.navigate("load", { nextScreen: "home" });
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#41bff5"
        barStyle="light-content"
      />
      <View style={styles.container}>
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
          style={styles.containerLogin}
        >
          <View style={styles.iconContainerRow}>
            <ImageBackground source={retangle} style={styles.iconContainer}>
              <Text style={styles.textIcon}>👋</Text>
            </ImageBackground>
          </View>
          {/* linha escrita login */}
          <View style={styles.headerTitleLogin}>
            <Text style={styles.titleLogin}>Login</Text>
          </View>

          {/* campo de código */}
          <View style={styles.containerInput}>
            <Text style={styles.titleInput}>Código de acesso</Text>
            <InputIcon icon={lock} placeholder="Código" />
          </View>

          {/* Button */}
          <View style={styles.containerButton}>
            <Button title="Entrar" onPress={handleLogin} />
          </View>
        </MotiView>
      </View>
    </>
  );
};
