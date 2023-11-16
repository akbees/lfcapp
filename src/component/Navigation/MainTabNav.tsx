import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import PlayerStackNav from './PlayerStackNav';
import GameTabNav from './GameTabNav';
import LogoutBtn from '../LogoutBtn';
import { AuthContext } from '../../service/AuthProvider';
import Fa from 'react-native-vector-icons/FontAwesome6';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from "react-native";

const MainTabNav = () => {
  const Tab = createBottomTabNavigator();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={
      ({ route }) => ({
        headerRight: () => {
          return isLoggedIn ? <LogoutBtn /> : null;
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == "Home") {
            return (<Fa name="house-chimney" size={25} color={focused ? "teal" : "gray"} />);
          }
          if (route.name == "Players") {
            return (<Fa name="person-running" size={30} color={focused ? "teal" : "gray"} />);
          }
          if (route.name == "Games") {
            return (<MatCom name="soccer-field" size={30} color={focused ? "teal" : "gray"} />);
          }
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={
              {
                fontSize: 10,
                fontWeight: (focused ? "bold" : "normal"),
                color: (focused ? "teal" : "gray")
              }}>
              {route.name}
            </Text>
          );
        }
      })
    }>
      <Tab.Screen name="Players" component={PlayerStackNav} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Games" component={GameTabNav} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}

export default MainTabNav;