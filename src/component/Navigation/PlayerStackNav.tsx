import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerListScreen from '../../screen/PlayerListScreen';
import AddPlayerScreen from '../../screen/AddPlayerScreen';
import PlayerDetailScreen from '../../screen/PlayerDetailScreen';

const PlayerStackNav = ()=> {
    const Stack = createNativeStackNavigator();
    
  return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="PlayersList" component={PlayerListScreen} options={{title:'Players List'}} />
        <Stack.Screen name="Details" component={PlayerDetailScreen} options={{title:'Players Details'}} />

        {/* require login to add player */}
        <Stack.Screen name="AddPlayer" component={AddPlayerScreen} options={{title:'Add Players'}} />
      </Stack.Navigator>
  );
}

export default PlayerStackNav;