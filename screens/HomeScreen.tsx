import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "expo-ui-kit";
import HomeSearchInput from "./HomeSearchInput";
import HomeFoodCarusel from "./HomeFoodCarusel";
import { UIKit } from "../constants";

export default function HomeScreen() {
  return (
    <Block theme={UIKit} gray>
      <Block noflex paddingHorizontal={50}>
        <Text bold size={35}>
          Delicious {"\n"}food for you
        </Text>
        <Block noflex paddingTop={30}>
          <HomeSearchInput />
        </Block>
      </Block>

      <Block paddingTop={35}>
        <HomeFoodCarusel />
      </Block>
    </Block>
  );
}
