import React from "react";
import { Block } from "expo-ui-kit";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeSearchInput() {
  return (
    <Block
      row
      center
      middle
      color="#EFEEEE"
      radius={50}
      style={{ overflow: "hidden" }}
    >
      <Ionicons
        style={{ padding: 10, paddingLeft: 25 }}
        name="ios-search"
        size={30}
        color="#000"
      />
      <TextInput
        style={{
          flex: 1,
          paddingRight: 10,
          paddingLeft: 0,
          paddingVertical: 20,
          backgroundColor: "#EFEEEE",
          color: "#424242",
        }}
        placeholder="Search"
        placeholderTextColor="#424242"
        onChangeText={(searchString) => {
          //   this.setState({ searchString });
        }}
        underlineColorAndroid="transparent"
      />
    </Block>
  );
}
