// // import React from "react";
// // import {
// //   View,
// //   SafeAreaView,
// //   Text,
// //   ScrollView,
// //   TextInput,
// //   StyleSheet,
// // } from "react-native";
// // import BikeList from "../components/BikeList";
// // import BrakeAndClutch from "../components/BrakeAndClutch ";
// // import Header from "../components/Header";

// // export default function HomeScreen({ navigation }) {
// //   const bikes = [
// //     {
// //       id: 1,
// //       name: "Yamaha",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
// //     },
// //     {
// //       id: 2,
// //       name: "Honda",
// //       image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
// //     },
// //     {
// //       id: 3,
// //       name: "Bajaj",
// //       image: "https://eauto.co.in/cdn/shop/files/3_300x.jpg?v=1622816136",
// //     },
// //     {
// //       id: 4,
// //       name: "Hero",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/5_ef93601e-e848-4fce-b9b9-9480b8d5597e_600x.jpg?v=1622816118",
// //     },
// //   ];

// //   const collections = [
// //     {
// //       id: 1,
// //       title: "Brake Disc Caliper",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/brake-disc-caliper-collection-eauto-co-in_300x.jpg?v=1613573915",
// //       link: "/collections/brake-disc-caliper",
// //     },
// //     {
// //       id: 2,
// //       title: "Brake Disc Plate",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/brake-disc-plate-eauto-co-in_300x.jpg?v=1613574284",
// //       link: "/collections/brake-disc-plate",
// //     },
// //     {
// //       id: 3,
// //       title: "Disc Brake Master Cylinder Assy.",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/frotn-brake-master-cylinder-collection-eauto-co-in_300x.jpg?v=1613574879",
// //       link: "/collections/disc-brake-master-cylinder-assembly",
// //     },
// //     {
// //       id: 4,
// //       title: "Brake Drum",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/Kumar-Auto-1200x1200_1_300x.jpg?v=1625649917",
// //       link: "/collections/brake-drum",
// //     },
// //     {
// //       id: 5,
// //       title: "Clutch Plates",
// //       image:
// //         "https://eauto.co.in/cdn/shop/files/Collection-Images-Scroll-Warehouse_2_51f8b964-efb6-4c51-813a-2090b3980371_300x.jpg?v=1617098721",
// //       link: "/collections/clutch-plates",
// //     },
// //   ];

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       {/* Header Section */}
// //       <View style={styles.headerContainer}>
// //         <Text style={styles.headerTitle}>
// //           <Text>AADI BIKES</Text>
// //         </Text>
// //         {/* Search Bar Section */}
// //         <View style={styles.searchContainer}>
// //           <TextInput
// //             style={styles.searchInput}
// //             placeholder="Search..."
// //             placeholderTextColor="#888"
// //           />
// //         </View>
// //         <Header />
// //       </View>


// //       {/* Hero Section */}
// //       <View style={styles.heroSection}>
// //         <Text style={styles.heroTitle}>
// //           Welcome to <Text style={{ color: "yellow" }}>AADI</Text> BIKES
// //         </Text>
// //         <Text style={styles.heroSubtitle}>
// //           Your One-Stop Two-Wheeler Spare Parts Marketplace
// //         </Text>
// //       </View>

// //       {/* Bike List */}
// //       <BikeList bikes={bikes} navigation={navigation} />

// //       {/* Brake & Clutch Section */}
// //       <BrakeAndClutch collections={collections} />
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "white",
// //     paddingTop: 40,
// //   },
// //   headerContainer: {
// //     flexDirection: "column",
// //     gap: 30,
// //     paddingHorizontal: 20,
// //     paddingVertical: 30,
// //     backgroundColor: "#1e2d7d", // Header background color
// //   },
// //   headerTitle: {
// //     color: "white",
// //     fontSize: 22,
// //     fontWeight: "bold",
// //   },
// //   searchContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: "100%",
// //   },
// //   searchInput: {
// //     width: "100%",
// //     height: 40,
// //     borderColor: "#888",
// //     borderWidth: 1,
// //     borderRadius: 20,
// //     paddingHorizontal: 15,
// //     backgroundColor: "white",
// //   },
// //   heroSection: {
// //     backgroundColor: "#1e2d7d",
// //     paddingVertical: 20,
// //     paddingHorizontal: 20,
// //   },
// //   heroTitle: {
// //     color: "white",
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// //   heroSubtitle: {
// //     color: "white",
// //     fontSize: 14,
// //     marginTop: 10,
// //   },
// // });


// // HomeScreen.js
// import React from "react";
// import {
//   View,
//   SafeAreaView,
//   Text,
//   TextInput,
//   StyleSheet,
// } from "react-native";
// import BikeList from "../components/BikeList";
// import BrakeAndClutch from "../components/BrakeAndClutch ";
// import Header from "../components/Header";

// export default function HomeScreen({ navigation }) {
//   const bikes = [
//     {
//       id: 1,
//       name: "Yamaha",
//       image:
//         "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
//     },
//     {
//       id: 2,
//       name: "Honda",
//       image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
//     },
//     {
//       id: 3,
//       name: "Bajaj",
//       image: "https://eauto.co.in/cdn/shop/files/3_300x.jpg?v=1622816136",
//     },
//     {
//       id: 4,
//       name: "Hero",
//       image:
//         "https://eauto.co.in/cdn/shop/files/5_ef93601e-e848-4fce-b9b9-9480b8d5597e_600x.jpg?v=1622816118",
//     },
//   ];

//   const collections = [
//     {
//       id: 1,
//       title: "Brake Disc Caliper",
//       image:
//         "https://eauto.co.in/cdn/shop/files/brake-disc-caliper-collection-eauto-co-in_300x.jpg?v=1613573915",
//       link: "/collections/brake-disc-caliper",
//     },
//     {
//       id: 2,
//       title: "Brake Disc Plate",
//       image:
//         "https://eauto.co.in/cdn/shop/files/brake-disc-plate-eauto-co-in_300x.jpg?v=1613574284",
//       link: "/collections/brake-disc-plate",
//     },
//     {
//       id: 3,
//       title: "Disc Brake Master Cylinder Assy.",
//       image:
//         "https://eauto.co.in/cdn/shop/files/frotn-brake-master-cylinder-collection-eauto-co-in_300x.jpg?v=1613574879",
//       link: "/collections/disc-brake-master-cylinder-assembly",
//     },
//     {
//       id: 4,
//       title: "Brake Drum",
//       image:
//         "https://eauto.co.in/cdn/shop/files/Kumar-Auto-1200x1200_1_300x.jpg?v=1625649917",
//       link: "/collections/brake-drum",
//     },
//     {
//       id: 5,
//       title: "Clutch Plates",
//       image:
//         "https://eauto.co.in/cdn/shop/files/Collection-Images-Scroll-Warehouse_2_51f8b964-efb6-4c51-813a-2090b3980371_300x.jpg?v=1617098721",
//       link: "/collections/clutch-plates",
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header Section */}
      // <View style={styles.headerContainer}>
      //   <Text style={styles.headerTitle}>
      //     <Text>AADI BIKES</Text>
      //   </Text>
      //   {/* Search Bar Section */}
      //   <View style={styles.searchContainer}>
      //     <TextInput
      //       style={styles.searchInput}
      //       placeholder="Search..."
      //       placeholderTextColor="#888"
      //     />
      //   </View>
      //   <Header />
      // </View>

//       {/* Hero Section */}
//       <View style={styles.heroSection}>
//         <Text style={styles.heroTitle}>
//           Welcome to <Text style={{ color: "yellow" }}>AADI</Text> BIKES
//         </Text>
//         <Text style={styles.heroSubtitle}>
//           Your One-Stop Two-Wheeler Spare Parts Marketplace
//         </Text>
//       </View>

//       {/* Bike List */}
//       <BikeList bikes={bikes} navigation={navigation} />

//       {/* Brake & Clutch Section */}
//       <BrakeAndClutch collections={collections} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: 40,
//   },
  // headerContainer: {
  //   flexDirection: "column",
  //   gap: 30,
  //   paddingHorizontal: 20,
  //   paddingVertical: 30,
  //   backgroundColor: "#1e2d7d", // Header background color
  // },
  // headerTitle: {
  //   color: "white",
  //   fontSize: 22,
  //   fontWeight: "bold",
  // },
  // searchContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  // },
  // searchInput: {
  //   width: "100%",
  //   height: 40,
  //   borderColor: "#888",
  //   borderWidth: 1,
  //   borderRadius: 20,
  //   paddingHorizontal: 15,
  //   backgroundColor: "white",
  // },
//   heroSection: {
//     backgroundColor: "#1e2d7d",
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   heroTitle: {
//     color: "white",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   heroSubtitle: {
//     color: "white",
//     fontSize: 14,
//     marginTop: 10,
//   },
// });


import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import BikeList from "../components/BikeList";
import BrakeAndClutch from "../components/BrakeAndClutch ";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header navigation={navigation} />
        <BikeList navigation={navigation} />
        <BrakeAndClutch />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  contentContainer: {
    paddingTop: 20, // Space added to ensure content is not hidden behind the Header
    paddingBottom: 20,
  },
});
