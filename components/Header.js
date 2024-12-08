// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TextInput,
//   Linking,
// } from "react-native";

// const Header = ({ navigation }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(true);

//   const menuItems = [
//     {
//       title: "Spares by Bike",
//       subMenu: [
//         {
//           title: "BAJAJ",
//           models: [
//             { title: "Avenger 150, 180, 200", link: "Avenger150Parts" },
//             { title: "Avenger 220", link: "Avenger220Parts" },
//           ],
//         },
//         {
//           title: "HERO",
//           models: [
//             { title: "Splendor Plus", link: "SplendorParts" },
//             { title: "Xtreme 160R", link: "XtremeParts" },
//           ],
//         },
//       ],
//     },
//     { title: "Spares by Category", screen: "CategoryScreen" },
//     { title: "Bike Body Parts", screen: "BodyPartsScreen" },
//     {
//       title: "Car LED Bulb",
//       link: "https://eauto.co.in/collections/led-bulb",
//     },
//     { title: "Wholesale Prices", link: "https://zcmp.in/H4yw" },
//     {
//       title: "Order Tracking",
//       link: "https://eauto.logisy.tech/track-order/",
//     },
//     {
//       title: "Returns & Exchanges",
//       link: "https://eauto-co-in.myshopify.com/apps/return_prime",
//     },
//     { title: "About Us", screen: "AboutScreen" },
//     { title: "Blogs", screen: "BlogsScreen" },
//     { title: "FAQs", screen: "FaqScreen" },
//   ];

//   const handleMenuClick = (item) => {
//     if (item.link) {
//       Linking.openURL(item.link);
//     } else if (item.screen) {
//       navigation.navigate(item.screen);
//     } else if (item.subMenu) {
//       navigation.navigate("SubMenuScreen", { subMenu: item.subMenu });
//     }
//   };

//   return (
//     <View style={styles.header}>
//       {/* Menu Toggle Button */}
//       <TouchableOpacity
//         style={styles.menuToggle}
//         onPress={() => {
//           setIsMenuOpen(!isMenuOpen);
//           setIsSearchVisible(!isMenuOpen);
//         }}
//         accessibilityLabel={isMenuOpen ? "Close menu" : "Open menu"}
//       >
//         <Image
//           source={
//             isMenuOpen
//               ? require("../assets/close.png")
//               : require("../assets/menu.png")
//           }
//           style={styles.icon}
//         />
//       </TouchableOpacity>

//       {/* Logo */}
//       <TouchableOpacity
//         onPress={() => navigation.navigate("HomeScreen")}
//         style={styles.logoContainer}
//       >
//         {/* <Image
//           source={{
//             uri: "https://eauto.co.in/cdn/shop/files/logo-eauto-warehouse_5_210x@2x.png?v=1615902614",
//           }}
//           style={styles.logo}
//         /> */}
//         <View>
//           <Text style={styles.headerTitle}>
//             <Text>AADI BIKES</Text>
//           </Text>
//         </View>
//       </TouchableOpacity>

//       {/* User Login */}
//       <TouchableOpacity
//         onPress={() => Linking.openURL("/account/login")}
//         style={styles.actionIcon}
//       >
//         <Image
//           source={require("../assets/login-icon.png")} // Replace with your login icon path
//           style={styles.icon}
//         />
//         <Text style={styles.actionText}>Login</Text>
//       </TouchableOpacity>

//       {/* Cart */}
//       <TouchableOpacity
//         onPress={() => navigation.navigate("CartScreen")}
//         style={styles.actionIcon}
//       >
//         <Image
//           source={require("../assets/cart-icon.png")} // Replace with your cart icon path
//           style={styles.icon}
//         />
//         <Text style={styles.actionText}>Cart</Text>
//       </TouchableOpacity>

//       {/* Search Bar */}
//       {isSearchVisible && (
//         <View style={styles.searchBar}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search..."
//             placeholderTextColor="#888"
//           />
//         </View>
//       )}

//       {/* Menu Content */}
//       {isMenuOpen && (
//         <View style={styles.menu}>
//           <ScrollView>
//             {menuItems.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.menuItem}
//                 onPress={() => handleMenuClick(item)}
//               >
//                 <Text style={styles.menuText}>{item.title}</Text>
//                 {item.subMenu && (
//                   <Image
//                     source={require("../assets/arrow-right.png")}
//                     style={styles.arrowIcon}
//                   />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//           <View style={styles.contactSection}>
//             <Text style={styles.helpText}>Need help?</Text>
//             <TouchableOpacity
//               onPress={() => Linking.openURL("mailto:info@eauto.co.in")}
//             >
//               <Text style={styles.contactText}>info@eauto.co.in</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "black",
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   menuToggle: {
//     padding: 10,
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: "center",
//   },
//   logo: {
//     width: 150,
//     height: 50,
//     resizeMode: "contain",
//   },
//   actionIcon: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   actionText: {
//     marginLeft: 5,
//     fontSize: 16,
//     color: "#333",
//   },
//   searchBar: {
//     position: "absolute",
//     top: 60,
//     left: 10,
//     right: 10,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     zIndex: 1,
//   },
//   searchInput: {
//     width: "100%",
//     height: 40,
//     borderColor: "#888",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   menu: {
//     backgroundColor: "#f9f9f9",
//     position: "absolute",
//     top: 70,
//     left: 0,
//     right: 0,
//     paddingVertical: 20,
//     zIndex: 2,
//   },
//   menuItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   menuText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   arrowIcon: {
//     width: 16,
//     height: 16,
//     resizeMode: "contain",
//   },
//   contactSection: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderTopColor: "#ddd",
//   },
//   helpText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   contactText: {
//     color: "#00badb",
//     marginTop: 5,
//   },
// });

// export default Header;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Linking,
} from "react-native";

const Header = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Spares by Bike",
      subMenu: [
        {
          title: "BAJAJ",
          models: [
            { title: "Avenger 150, 180, 200", link: "Avenger150Parts" },
            { title: "Avenger 220", link: "Avenger220Parts" },
          ],
        },
        {
          title: "HERO",
          models: [
            { title: "Splendor Plus", link: "SplendorParts" },
            { title: "Xtreme 160R", link: "XtremeParts" },
          ],
        },
      ],
    },
    { title: "Spares by Category", screen: "CategoryScreen" },
    { title: "Bike Body Parts", screen: "BodyPartsScreen" },
    {
      title: "Car LED Bulb",
      link: "https://eauto.co.in/collections/led-bulb",
    },
    { title: "Wholesale Prices", link: "https://zcmp.in/H4yw" },
    {
      title: "Order Tracking",
      link: "https://eauto.logisy.tech/track-order/",
    },
    {
      title: "Returns & Exchanges",
      link: "https://eauto-co-in.myshopify.com/apps/return_prime",
    },
    { title: "About Us", screen: "AboutScreen" },
    { title: "Blogs", screen: "BlogsScreen" },
    { title: "FAQs", screen: "FaqScreen" },
  ];

  const handleMenuClick = (item) => {
    if (item.link) {
      Linking.openURL(item.link);
    } else if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.subMenu) {
      navigation.navigate("SubMenuScreen", { subMenu: item.subMenu });
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {/* Menu Toggle Button */}
        <TouchableOpacity
          style={styles.menuToggle}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          accessibilityLabel={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <Image
            source={
              isMenuOpen
                ? require("../assets/close.png")
                : require("../assets/menu.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Logo */}
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.logoContainer}
        >
          <Text style={styles.headerTitle}>AADI BIKES</Text>
        </TouchableOpacity>

        {/* User Login */}
        <TouchableOpacity
          onPress={() => Linking.openURL("/account/login")}
          style={styles.actionIcon}
        >
          <Image
            source={require("../assets/login-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Login</Text>
        </TouchableOpacity>

        {/* Cart */}
        <TouchableOpacity
          onPress={() => navigation.navigate("CartScreen")}
          style={styles.actionIcon}
        >
          <Image
            source={require("../assets/cart-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {!isMenuOpen && (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
      )}

      {/* Menu Content */}
      {isMenuOpen && (
        <View style={styles.menu}>
          <ScrollView>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuClick(item)}
              >
                <Text style={styles.menuText}>{item.title}</Text>
                {item.subMenu && (
                  <Image
                    source={require("../assets/arrow-right.png")}
                    style={styles.arrowIcon}
                  />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.contactSection}>
            <Text style={styles.helpText}>Need help?</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:info@eauto.co.in")}
            >
              <Text style={styles.contactText}>info@eauto.co.in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  menuToggle: {
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  actionIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#333",
  },
  searchBar: {
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  searchInput: {
    width: "100%",
    height: 40,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  menu: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  arrowIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  contactSection: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  helpText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactText: {
    color: "#00badb",
    marginTop: 5,
  },
});

export default Header;
