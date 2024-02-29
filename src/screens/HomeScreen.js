import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Image,
  Text,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import axios from "axios";
import Receipes from "../components/Receipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );

      if (response && response.data) setCategories(response.data.categories);
    } catch (error) {
      console.log("error ", error.message);
    }
  };

  const getRecipes = async (category = "Starter") => {
    try {
      const response = await axios(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      if (response && response.data) setMeals(response.data.meals);
    } catch (error) {
      console.log("error ", error.message);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello Raunak!
          </Text>

          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Make your own food.
            </Text>
          </View>

          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="text-amber-400">home.</Text>
          </Text>

          <View className="mx-1 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput
              placeholder="Search any receipe"
              placeholderTextColor="gray"
              style={{ fontSize: hp(1.7) }}
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />

            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                strokeWidth={3}
                color="gray"
              />
            </View>
          </View>

          <View>
            {categories.length > 0 && (
              <Categories
                categories={categories}
                activeCategory={activeCategory}
                handleChangeCategory={handleChangeCategory}
              />
            )}
          </View>

          <View>
            <Receipes meals={meals} categories={categories} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
