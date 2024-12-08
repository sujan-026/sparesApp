import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const BikeModelsScreen = ({ route, navigation }) => {
  const { models, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        {models.map((model, index) => (
          <TouchableOpacity
            key={index}
            style={styles.modelItem}
            onPress={() =>
              navigation.navigate("Parts", { modelTitle: model.title })
            }
          >
            <Text style={styles.modelText}>{model.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  modelItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modelText: {
    fontSize: 16,
    color: "#333",
  },
});

export default BikeModelsScreen;
