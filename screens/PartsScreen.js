// import React, { useEffect, useState } from "react";
// import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

// export default function PartsScreen({ route }) {
//   const { bikeId, models } = route.params; // Get bikeId and models from route params
//   const [selectedModels, setSelectedModels] = useState([]);

//   useEffect(() => {
//     // Set the models of the selected bike company
//     setSelectedModels(models);
//   }, [bikeId, models]); // Re-run effect whenever bikeId or models change

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={styles.title}>
//           Models under {selectedModels[0]?.title?.split(" ")[0]}
//         </Text>
//         {/* Dynamically show the brand name */}
//         <View style={styles.partsContainer}>
//           {selectedModels.map((model) => (
//             <View key={model.id} style={styles.partCard}>
//               <Image source={{ uri: model.image }} style={styles.partImage} />
//               <Text style={styles.partName}>{model.title}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// // Define the styles using StyleSheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
//   partsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     padding: 20,
//   },
//   partCard: {
//     width: "48%", // 2 items per row (roughly equivalent to w-1/2 in Tailwind)
//     padding: 10,
//   },
//   partImage: {
//     height: 120, // Equivalent to h-32 in Tailwind
//     width: "100%",
//     borderRadius: 10,
//   },
//   partName: {
//     textAlign: "center",
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });


import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function PartsScreen({ route }) {
  const { models } = route.params;
  const [parts, setParts] = useState(models || []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Available Models</Text>
        <View style={styles.partsContainer}>
          {parts.map((model) => (
            <View key={model.id} style={styles.partCard}>
              <Image source={{ uri: model.image }} style={styles.partImage} />
              <Text style={styles.partName}>{model.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  partsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  partCard: {
    width: "48%",
    padding: 10,
  },
  partImage: {
    height: 120,
    width: "100%",
    borderRadius: 10,
  },
  partName: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
