import React, { useState, useEffect, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getStyles } from "./styles";
import { Appbar } from "react-native-paper";
import { getCategories } from "../../../services/habits";
import { NiceTextButton, StyleContainer } from "../../../components";
import { useTheme } from "../../../components/Theme"

export default function CategoryListScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const { theme } = useTheme();
  const styles = useMemo(() => getStyles(theme));
  useEffect(() => {
    getCategories()
      .then((categories) => setCategories(categories))
      .catch((error) => console.error("Error loading categories:", error));
  }
    , []);

  const navigateToHabitsList = (categoryId, title) => {
    navigation.navigate("HabitsList", { categoryId, categoryTitle: title });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar} >
        <Appbar.Action
          icon={() => <Ionicons name="close" size={30} color="#fff" />}
          onPress={() => navigation.navigate("Home")}
        />
        <Appbar.Content title="Catégories" titleStyle={styles.appbarTitle} />
      </Appbar.Header>
      <StyleContainer
        label="Tu ne trouves pas ton bonheur ?"
      >
        <NiceTextButton
          text="Réalise ta propre habitude !"
          onPress={() => navigation.navigate("TaskForm",{ habitId: 99, categoryId: 13, habitTitle: "Custom"})}
        />
      </StyleContainer>
      <FlatList
        style={styles.categoryList}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToHabitsList(item.id, item.name)} style={styles.categoryBlock}>
            <Text style={styles.categoryTitle}>{item.name}</Text>
            <Text style={styles.categoryDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
