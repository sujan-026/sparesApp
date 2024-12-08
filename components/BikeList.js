// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   StyleSheet,
// } from "react-native";

// export default function BikeList({ navigation }) {
  // const bikes = [
  //   {
  //     id: 1,
  //     title: "BAJAJ",
  //     image: "https://eauto.co.in/cdn/shop/files/3_300x.jpg?v=1622816136",
  //     link: "/pages/online-spare-parts-price-list-by-bajaj-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Bajaj Pulsar 150",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/11_0eef9d50-e41e-4bb0-a834-da216ae288fe_280x.jpg?v=1616830076",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Bajaj Avenger 220",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/4_ef93601e-e848-4fce-b9b9-9480b8d5597e_280x.jpg?v=1616928081",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "HERO",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/5_ef93601e-e848-4fce-b9b9-9480b8d5597e_300x.jpg?v=1622816118",
  //     link: "/pages/online-spare-parts-price-list-by-hero-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Hero Splendor Plus",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/11_0eef9d50-e41e-4bb0-a834-da216ae288fe_280x.jpg?v=1616830076",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Hero Xtreme 160R",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/4_ef93601e-e848-4fce-b9b9-9480b8d5597e_280x.jpg?v=1616928081",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "HONDA",
  //     image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
  //     link: "/pages/online-spare-parts-price-list-by-honda-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Honda CB Hornet 160R",
  //         image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Honda Activa 6G",
  //         image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "SUZUKI",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
  //     link: "/pages/online-spare-parts-price-list-by-suzuki-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Suzuki Gixxer SF",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Suzuki Access 125",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "TVS",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
  //     link: "/pages/online-spare-parts-price-list-by-tvs-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "TVS Apache RTR 160",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "TVS NTorq 125",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "YAMAHA",
  //     image:
  //       "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
  //     link: "/pages/online-spare-parts-price-list-by-yamaha-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Yamaha FZ 25",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Yamaha R15 V3",
  //         image:
  //           "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     title: "MAHINDRA",
  //     image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
  //     link: "/pages/online-spare-parts-price-list-by-mahindra-bike-model",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Mahindra Mojo",
  //         image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Mahindra Centuro",
  //         image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     title: "Royal Enfield",
  //     image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
  //     link: "/collections/online-spare-parts-price-list-for-royal-enfield-bikes",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Royal Enfield Classic 350",
  //         image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Royal Enfield Meteor 350",
  //         image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     title: "Kawasaki",
  //     image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
  //     link: "/collections/online-spare-parts-price-list-for-kawasaki-ninja-bikes",
  //     models: [
  //       {
  //         id: 1,
  //         title: "Kawasaki Ninja 300",
  //         image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
  //         link: "/collections/tvs-apache-150",
  //       },
  //       {
  //         id: 2,
  //         title: "Kawasaki Z800",
  //         image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
  //         link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
  //       },
  //     ],
  //   },
  // ];

//   const handleBikeClick = (bike) => {
//     navigation.navigate("Parts", { bikeId: bike.id, models: bike.models }); // Pass bike models to PartsScreen
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose a Bike</Text>
//       <ScrollView horizontal contentContainerStyle={styles.bikeList}>
//         {bikes.map((bike) => (
//           <TouchableOpacity
//             key={bike.id}
//             style={styles.bikeCard}
//             onPress={() => handleBikeClick(bike)} // Navigate to PartsScreen with bikeId and models
//           >
//             <Image source={{ uri: bike.image }} style={styles.bikeImage} />
//             <Text style={styles.bikeName}>{bike.title}</Text>
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
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 15,
//     paddingHorizontal: 20,
//   },
//   bikeList: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingLeft: 20,
//   },
//   bikeCard: {
//     width: 150,
//     alignItems: "center",
//     marginRight: 20,
//   },
//   bikeImage: {
//     height: 120,
//     width: 120,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   bikeName: {
//     textAlign: "center",
//     fontSize: 14,
//     marginVertical: 20,
//     paddingHorizontal: 20,
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

export default function BikeList({ navigation }) {
  const bikes = [
    {
      id: 1,
      title: "BAJAJ",
      image: "https://eauto.co.in/cdn/shop/files/3_300x.jpg?v=1622816136",
      link: "/pages/online-spare-parts-price-list-by-bajaj-bike-model",
      models: [
        {
          id: 1,
          title: "Bajaj Pulsar 150",
          image:
            "https://eauto.co.in/cdn/shop/files/11_0eef9d50-e41e-4bb0-a834-da216ae288fe_280x.jpg?v=1616830076",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Bajaj Avenger 220",
          image:
            "https://eauto.co.in/cdn/shop/files/4_ef93601e-e848-4fce-b9b9-9480b8d5597e_280x.jpg?v=1616928081",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 2,
      title: "HERO",
      image:
        "https://eauto.co.in/cdn/shop/files/5_ef93601e-e848-4fce-b9b9-9480b8d5597e_300x.jpg?v=1622816118",
      link: "/pages/online-spare-parts-price-list-by-hero-bike-model",
      models: [
        {
          id: 1,
          title: "Hero Splendor Plus",
          image:
            "https://eauto.co.in/cdn/shop/files/11_0eef9d50-e41e-4bb0-a834-da216ae288fe_280x.jpg?v=1616830076",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Hero Xtreme 160R",
          image:
            "https://eauto.co.in/cdn/shop/files/4_ef93601e-e848-4fce-b9b9-9480b8d5597e_280x.jpg?v=1616928081",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 3,
      title: "HONDA",
      image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
      link: "/pages/online-spare-parts-price-list-by-honda-bike-model",
      models: [
        {
          id: 1,
          title: "Honda CB Hornet 160R",
          image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Honda Activa 6G",
          image: "https://eauto.co.in/cdn/shop/files/8_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 4,
      title: "SUZUKI",
      image:
        "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
      link: "/pages/online-spare-parts-price-list-by-suzuki-bike-model",
      models: [
        {
          id: 1,
          title: "Suzuki Gixxer SF",
          image:
            "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Suzuki Access 125",
          image:
            "https://eauto.co.in/cdn/shop/files/6_6532dedf-9ddc-4367-a817-7991b1f0e745_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 5,
      title: "TVS",
      image:
        "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
      link: "/pages/online-spare-parts-price-list-by-tvs-bike-model",
      models: [
        {
          id: 1,
          title: "TVS Apache RTR 160",
          image:
            "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "TVS NTorq 125",
          image:
            "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_300x.jpg?v=1622816136",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 6,
      title: "YAMAHA",
      image:
        "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
      link: "/pages/online-spare-parts-price-list-by-yamaha-bike-model",
      models: [
        {
          id: 1,
          title: "Yamaha FZ 25",
          image:
            "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Yamaha R15 V3",
          image:
            "https://eauto.co.in/cdn/shop/files/4_31140204-a20c-43b5-a14a-500ead3859a2_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 7,
      title: "MAHINDRA",
      image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
      link: "/pages/online-spare-parts-price-list-by-mahindra-bike-model",
      models: [
        {
          id: 1,
          title: "Mahindra Mojo",
          image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Mahindra Centuro",
          image: "https://eauto.co.in/cdn/shop/files/9_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 8,
      title: "Royal Enfield",
      image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
      link: "/collections/online-spare-parts-price-list-for-royal-enfield-bikes",
      models: [
        {
          id: 1,
          title: "Royal Enfield Classic 350",
          image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Royal Enfield Meteor 350",
          image: "https://eauto.co.in/cdn/shop/files/12_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
    {
      id: 9,
      title: "Kawasaki",
      image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
      link: "/collections/online-spare-parts-price-list-for-kawasaki-ninja-bikes",
      models: [
        {
          id: 1,
          title: "Kawasaki Ninja 300",
          image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
          link: "/collections/tvs-apache-150",
        },
        {
          id: 2,
          title: "Kawasaki Z800",
          image: "https://eauto.co.in/cdn/shop/files/11_300x.jpg?v=1622816118",
          link: "/collections/bike-tvs-apache-rtr-160-spare-parts-list-at-best-price",
        },
      ],
    },
  ];

  const handleBikeClick = (bike) => {
    navigation.navigate("PartsScreen", { bikeId: bike.id, models: bike.models });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Bike</Text>
      <ScrollView horizontal contentContainerStyle={styles.bikeList}>
        {bikes.map((bike) => (
          <TouchableOpacity
            key={bike.id}
            style={styles.bikeCard}
            onPress={() => handleBikeClick(bike)}
          >
            <Image source={{ uri: bike.image }} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{bike.title}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  bikeList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  bikeCard: {
    width: 150,
    alignItems: "center",
    marginRight: 20,
  },
  bikeImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  bikeName: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
