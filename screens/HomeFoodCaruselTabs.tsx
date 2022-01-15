import React, { useState } from "react";
import {
  Animated,
  FlatList,
  LayoutRectangle,
  MeasureOnSuccessCallback,
  TouchableOpacity,
  View,
} from "react-native";
import { Block, Text } from "expo-ui-kit";
import { Colors, Layout, UIKit } from "../constants";
import { Foods, FoodTypes } from "./data";

export type HomeFoodCaruselTabsProps = {
  scrollX: Animated.Value;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function HomeFoodCaruselTabs({
  scrollX,
  activeTab,
  setActiveTab,
}: HomeFoodCaruselTabsProps) {
  const listRef = React.useRef<FlatList>();

  React.useEffect(() => {
    if (activeTab) {
      const indexTab = FoodTypes.findIndex((x) => x.title == activeTab);

      listRef.current.scrollToIndex({
        animated: true,
        viewOffset: 50 * indexTab,
        index: indexTab,
      });
    }
  }, [activeTab]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        ref={item.ref}
        onPress={() => {
          setActiveTab(item.title);
        }}
      >
        <Block noflex marginLeft={10} paddingHorizontal={20} paddingBottom={5}>
          <Text
            theme={UIKit}
            size={17}
            primary={activeTab === item}
            style={{
              color:
                activeTab === item.title
                  ? Colors.light.tint
                  : Colors.light.tabIconDefault,

              fontWeight: activeTab === item.title ? "bold" : "normal",
            }}
          >
            {item.title}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block row marginBottom={25}>
      <FlatList
        ref={listRef}
        data={FoodTypes}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        decelerationRate="fast"
        bounces={false}
        getItemLayout={(_, index) => ({
          length: FoodTypes.length,
          offset: 100 * index,
          index,
        })}
        contentContainerStyle={{
          marginLeft: Layout.padding,
          paddingRight: Layout.padding,
        }}
        renderItem={renderItem}
      />
    </Block>
  );
}
