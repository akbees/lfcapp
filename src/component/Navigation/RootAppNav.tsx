import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/LoginScreen';
import MainTabNav from './MainTabNav';

export type rootNavParamsType = {
  Login?: {message:string},
  MainNav: undefined
};

const RootAppNav = () => {
  const Stack = createNativeStackNavigator<rootNavParamsType>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainNav' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainNav" component={MainTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootAppNav;