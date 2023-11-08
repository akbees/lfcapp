import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import PlayerStackNav from './PlayerStackNav';
import GameTabNav from './GameTabNav';


const MainTabNav = ()=> {
    const Tab = createBottomTabNavigator();
    
  return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Players" component={PlayerStackNav} options={{headerShown:false}} />
        <Tab.Screen name="Games" component={GameTabNav} options={{headerShown:true}} />
      </Tab.Navigator>
  );
}

export default MainTabNav;