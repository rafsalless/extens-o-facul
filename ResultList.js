import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca Ionicons da Expo para uso de ícones
import { useNavigation } from "@react-navigation/native";

export default function ResultList({ title, results }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name='restaurant' size={24} color='#FF6347' />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false} 
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow", { id: item.id });
              }}
              style={styles.touchable}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, 
    paddingHorizontal: 15 
  },
  headerContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginBottom: 10 
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1 
  },
  touchable: {
    marginRight: 15, 
    backgroundColor: "#fff", 
    borderRadius: 15, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 6,
    elevation: 5, 
    overflow: "hidden" 
  }
});
