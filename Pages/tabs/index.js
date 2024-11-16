// import { View, Text } from 'react-native'
// import React from 'react'
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from '../Home';
// import Profile from '../Profile';


// const BottomTabs = () => {

//     const Tab = createBottomTabNavigator();

//     return (
//         <Tab.Navigator
//           initialRouteName="home"
//           screenOptions={{
//             tabBarActiveTintColor: '#e91e63',
//             headerShom: false,
//           }}
//         >
//           <Tab.Screen
//             name="home"
//             component={Home}
//             options={{
//               tabBarLabel: 'Home',
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="home" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Notifications"
//             component={Home}
//             options={{
//               tabBarLabel: 'Updates',
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="bell" color={color} size={size} />
//               ),
//               tabBarBadge: 3,
//             }}
//           />
//           <Tab.Screen
//             name="Profile"
//             component={Home}
//             options={{
//               tabBarLabel: 'Profile',
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="account" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Profile',
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="account" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Profile',
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="account" color={color} size={size} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       );
// }

// export default BottomTabs