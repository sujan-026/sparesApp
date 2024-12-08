import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const menuData = [
  {
    title: "Spares by Bike",
    link: "/pages/online-spare-parts-price-by-bike-model",
  },
  {
    title: "BAJAJ",
    link: "/pages/online-spare-parts-price-list-by-bajaj-bike-model",
  },
  {
    title: "HERO",
    link: "/pages/online-spare-parts-price-list-by-hero-bike-model",
  },
  {
    title: "Honda",
    link: "/pages/online-spare-parts-price-list-by-honda-bike-model",
  },
  // Add more menu items based on the HTML structure
];

const MenuPage = ({ navigation }) => {
  const handleNavigation = (link) => {
    console.log("Navigating to:", link);
    // You can handle navigation to external URLs here or navigate to specific screens
  };

  return (
    <ScrollView style={styles.container}>
      {menuData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleNavigation(item.link)}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default MenuPage;
