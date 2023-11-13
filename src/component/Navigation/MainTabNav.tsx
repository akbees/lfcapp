import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import PlayerStackNav from './PlayerStackNav';
import GameTabNav from './GameTabNav';
import LogoutBtn from '../LogoutBtn';
import { AuthContext } from '../../service/AuthProvider';


const MainTabNav = () => {
  const Tab = createBottomTabNavigator();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={
      {
        headerRight: () => {
          return isLoggedIn ? <LogoutBtn /> : null;
        }
      }
    }>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Players" component={PlayerStackNav} options={{ headerShown: false }} />
      <Tab.Screen name="Games" component={GameTabNav} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}

export default MainTabNav;