import React from "react";
import { StatusBar, View } from "react-native";
import { navigationProps } from "../../interfaces/navigation";
import { FirstSwipe } from "./first";
import { SecondSwipe } from "./second";
import { ThrirdSwipe } from "./third";

interface i {
  i: number;
}

export const SwipeTemplate = ({ navigation }: navigationProps) => {
  const [index, setIndex] = React.useState(0);

  const nextIndex = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      navigation.navigate("login");
    }
  };

  const Swipe = ({ i }: i) => {
    switch (i) {
      case 0:
        return <FirstSwipe nextIndex={nextIndex} index={index} />;
      case 1:
        return <SecondSwipe nextIndex={nextIndex} index={index} />;
      default:
        return <ThrirdSwipe nextIndex={nextIndex} index={index} />;
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#41bff5"
        barStyle="light-content"
      />
      <View>
        <Swipe i={index} />
      </View>
    </>
  );
};
