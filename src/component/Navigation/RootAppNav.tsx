import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/LoginScreen';
import MainTabNav from './MainTabNav';
import { AuthContext } from '../../service/AuthProvider';

export type rootNavParamsType = {
  Login: undefined,
  MainNav: undefined
};

const RootAppNav = () => {
  const Stack = createNativeStackNavigator<rootNavParamsType>();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isLoggedIn
            ? (<Stack.Screen name="MainNav" component={MainTabNav} options={{ headerShown: false }} />)
            : (<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />)

        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootAppNav;