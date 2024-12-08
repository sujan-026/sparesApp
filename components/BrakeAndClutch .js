// // BrakeAndClutch.js
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   StyleSheet,
// } from "react-native";

// export default function BrakeAndClutch() {
  // const collections = [
  //   {
  //     id: 1,
  //     title: "Brake Disc Caliper",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/brake-disc-caliper-collection-eauto-co-in_300x.jpg?v=1613573915",
  //     link: "/collections/brake-disc-caliper",
  //   },
  //   {
  //     id: 2,
  //     title: "Brake Disc Plate",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/brake-disc-plate-eauto-co-in_300x.jpg?v=1613574284",
  //     link: "/collections/brake-disc-plate",
  //   },
  //   {
  //     id: 3,
  //     title: "Disc Brake Master Cylinder Assy.",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/frotn-brake-master-cylinder-collection-eauto-co-in_300x.jpg?v=1613574879",
  //     link: "/collections/disc-brake-master-cylinder-assembly",
  //   },
  //   {
  //     id: 4,
  //     title: "Brake Drum",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/Kumar-Auto-1200x1200_1_300x.jpg?v=1625649917",
  //     link: "/collections/brake-drum",
  //   },
  //   {
  //     id: 5,
  //     title: "Clutch Plates",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/Collection-Images-Scroll-Warehouse_2_51f8b964-efb6-4c51-813a-2090b3980371_300x.jpg?v=1617098721",
  //     link: "/collections/clutch-plates",
  //   },
  // ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Brake & Clutch</Text>
//       <ScrollView horizontal contentContainerStyle={styles.collectionList}>
//         {collections.map((collection) => (
//           <TouchableOpacity
//             key={collection.id}
//             style={styles.collectionItem}
//             onPress={() => {
//               console.log(`Navigating to: ${collection.link}`);
//             }}
//           >
//             <Image
//               source={{ uri: collection.image }}
//               style={styles.collectionImage}
//             />
//             <Text style={styles.collectionTitle}>{collection.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginVertical: 20,
//     paddingHorizontal: 20,
//   },
//   collectionList: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingLeft: 20,
//   },
//   collectionItem: {
//     width: 150,
//     marginRight: 20,
//     alignItems: "center",
//   },
//   collectionImage: {
//     height: 120,
//     width: 120,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   collectionTitle: {
//     textAlign: "center",
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function BrakeAndClutch() {
  const collections = [
    {
      id: 1,
      title: "Brake Disc Caliper",
      image:
        "https://eauto.co.in/cdn/shop/files/brake-disc-caliper-collection-eauto-co-in_300x.jpg?v=1613573915",
      link: "/collections/brake-disc-caliper",
    },
    {
      id: 2,
      title: "Brake Disc Plate",
      image:
        "https://eauto.co.in/cdn/shop/files/brake-disc-plate-eauto-co-in_300x.jpg?v=1613574284",
      link: "/collections/brake-disc-plate",
    },
    {
      id: 3,
      title: "Disc Brake Master Cylinder Assy.",
      image:
        "https://eauto.co.in/cdn/shop/files/frotn-brake-master-cylinder-collection-eauto-co-in_300x.jpg?v=1613574879",
      link: "/collections/disc-brake-master-cylinder-assembly",
    },
    {
      id: 4,
      title: "Brake Drum",
      image:
        "https://eauto.co.in/cdn/shop/files/Kumar-Auto-1200x1200_1_300x.jpg?v=1625649917",
      link: "/collections/brake-drum",
    },
    {
      id: 5,
      title: "Clutch Plates",
      image:
        "https://eauto.co.in/cdn/shop/files/Collection-Images-Scroll-Warehouse_2_51f8b964-efb6-4c51-813a-2090b3980371_300x.jpg?v=1617098721",
      link: "/collections/clutch-plates",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Brake & Clutch</Text>
      <ScrollView horizontal contentContainerStyle={styles.collectionList}>
        {collections.map((collection) => (
          <TouchableOpacity
            key={collection.id}
            style={styles.collectionItem}
            onPress={() => console.log(`Navigating to: ${collection.link}`)}
          >
            <Image
              source={{ uri: collection.image }}
              style={styles.collectionImage}
            />
            <Text style={styles.collectionTitle}>{collection.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  collectionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  collectionItem: {
    width: 150,
    alignItems: "center",
    marginRight: 20,
  },
  collectionImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  collectionTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
