import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BikeList from "../components/BikeList";

const SparesByBike = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Spares by Bike</Text> */}
      <BikeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SparesByBike;
