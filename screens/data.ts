import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";

export type FoodType = {
  title: string;
  image: string;
  category: string;
};

export const Foods: FoodType[] = [
  {
    title: "Veggie \n tomato mix",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast1.png"),
  },
  {
    title: "Spicy \n  fish sauce",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast2.png"),
  },
  {
    title: "Veggie \n tomato mix",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast3.png"),
  },
  {
    title: "Spicy \n  fish sauce",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast4.png"),
  },
  {
    title: "Veggie \n tomato mix",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast5.png"),
  },
  {
    title: "Veggie \n tomato mix",
    category: "Breakfast",
    image: require("../assets/images/Breakfast/breakfast6.png"),
  },

  {
    title: "Spicy \n  fish sauce",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner1.png"),
  },
  {
    title: "Veggie \n tomato mix",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner2.png"),
  },
  {
    title: "Spicy \n  fish sauce",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner3.png"),
  },
  {
    title: "Dinner4",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner4.png"),
  },
  {
    title: "Dinner5",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner5.png"),
  },
  {
    title: "Dinner6",
    category: "Dinner",
    image: require("../assets/images/Dinner/dinner6.png"),
  },

  {
    title: "lunch1",
    category: "lunch",
    image: require("../assets/images/lunch/lunch1.png"),
  },
  {
    title: "lunch2",
    category: "lunch",
    image: require("../assets/images/lunch/lunch2.png"),
  },
  {
    title: "lunch3",
    category: "lunch",
    image: require("../assets/images/lunch/lunch3.png"),
  },
  {
    title: "lunch4",
    category: "lunch",
    image: require("../assets/images/lunch/lunch4.png"),
  },
  {
    title: "lunch5",
    category: "lunch",
    image: require("../assets/images/lunch/lunch5.png"),
  },
  {
    title: "lunch6",
    category: "lunch",
    image: require("../assets/images/lunch/lunch6.png"),
  },

  {
    title: "Drinks",
    category: "Drinks",
    image: require("../assets/images/Breakfast/breakfast1.png"),
  },
  {
    title: "Drinks",
    category: "Drinks",
    image: require("../assets/images/Breakfast/breakfast2.png"),
  },
  {
    title: "Drinks",
    category: "Drinks",
    image: require("../assets/images/Breakfast/breakfast3.png"),
  },
  {
    title: "Snacks",
    category: "Snacks",
    image: require("../assets/images/Dinner/dinner2.png"),
  },
  {
    title: "Snacks",
    category: "Snacks",
    image: require("../assets/images/Dinner/dinner3.png"),
  },
];

export const FoodTypes = [
  {
    title: "Breakfast",
    ref: React.createRef<TouchableOpacity>(),
  },
  {
    title: "Dinner",
    ref: React.createRef<TouchableOpacity>(),
  },
  {
    title: "lunch",
    ref: React.createRef<TouchableOpacity>(),
  },
  {
    title: "Drinks",
    ref: React.createRef<TouchableOpacity>(),
  },
  {
    title: "Snacks",
    ref: React.createRef<TouchableOpacity>(),
  },
];
