import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const SubMenuScreen = ({ route, navigation }) => {
  const { subMenu } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spares by Bike</Text>
      <ScrollView>
        {subMenu.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.subMenuItem}
            onPress={() =>
              navigation.navigate("BikesModelScreen", {
                models: item.models,
                title: item.title,
              })
            }
          >
            <Text style={styles.subMenuText}>{item.title}</Text>
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
  subMenuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  subMenuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SubMenuScreen;
