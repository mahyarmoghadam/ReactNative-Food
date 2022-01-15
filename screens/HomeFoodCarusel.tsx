import React, { useCallback, useRef, useState } from "react";
import { Block, Text } from "expo-ui-kit";
import HomeFoodCaruselTabs from "./HomeFoodCaruselTabs";
import { Foods, FoodTypes } from "./data";
import {
  Animated,
  FlatList,
  useWindowDimensions,
  Image,
  View,
} from "react-native";
import { Layout, UIKit } from "../constants";
import Carousel from "react-native-snap-carousel";

export default function HomeFoodCarusel() {
  const ref = React.useRef();
  const [activeTab, setActiveTab] = React.useState(Foods[0].category);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const { width: widthScreen } = useWindowDimensions();
  const PADDING_RIGHT = 10;
  const ITEM_WIDTH = widthScreen / 1.7;

  React.useEffect(() => {
    if (activeTab) {
      ref.current.snapToItem(
        Foods.map(function (e) {
          return e.category;
        }).indexOf(activeTab)
      );
    }
  }, [activeTab]);

  const onChangeIndex = (index: number) => {
    if (Foods[index].category !== activeTab) {
      setActiveTab(Foods[index].category);
    }
  };

  return (
    <Block flex>
      <HomeFoodCaruselTabs
        scrollX={scrollX}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Carousel
        ref={ref}
        data={Foods}
        onBeforeSnapToItem={onChangeIndex}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerCustomStyle={{
          marginLeft: Layout.padding,
          paddingRight: Layout.padding,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];
          return (
            <Block
              noflex
              width={ITEM_WIDTH}
              paddingRight={PADDING_RIGHT}
              height={300}
            >
              <Block white radius={30} marginTop={60}>
                <Block
                  noflex
                  center
                  middle
                  style={{
                    position: "relative",
                    top: -50,
                  }}
                >
                  <Block
                    animated
                    noflex
                    style={{
                      width: 160,
                      height: 160,
                      transform: [
                        {
                          rotate: scrollX.interpolate({
                            inputRange: inputRange,
                            outputRange: [270, 0, 0],
                          }),
                        },
                      ],
                    }}
                    center
                  >
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: 260,
                        height: 160,
                      }}
                    />
                  </Block>

                  <Block
                    noflex
                    animated
                    style={{
                      opacity: scrollX.interpolate({
                        inputRange: inputRange,
                        outputRange: [0, 1, 0],
                      }),
                      transform: [
                        {
                          translateX: scrollX.interpolate({
                            inputRange: inputRange,
                            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
                          }),
                        },
                      ],
                    }}
                  >
                    <Text bold size={22} center marginTop={5}>
                      {item.title}
                    </Text>
                  </Block>
                  <Text
                    theme={UIKit}
                    bold
                    size={20}
                    center
                    marginTop={20}
                    primary
                  >
                    14,90€
                  </Text>
                </Block>
              </Block>
            </Block>
          );
        }}
        sliderWidth={widthScreen}
        itemWidth={ITEM_WIDTH}
      />
    </Block>
  );
}
