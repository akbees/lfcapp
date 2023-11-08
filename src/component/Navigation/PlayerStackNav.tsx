import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerListScreen from '../../screen/PlayerListScreen';
import AddPlayerScreen from '../../screen/AddPlayerScreen';
import PlayerDetailScreen from '../../screen/PlayerDetailScreen';

type playerNavParamsType = {
  PlayersList:undefined,
  PlayerDetails: {id:number},
  AddPlayer: undefined
};

const PlayerStackNav = ()=> {
    const Stack = createNativeStackNavigator<playerNavParamsType>();
    
  return (
      <Stack.Navigator initialRouteName='PlayersList'>
        <Stack.Screen name="PlayersList" component={PlayerListScreen} options={{title:'Players List'}} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetailScreen} options={{title:'Players Details'}} />

        {/* require login to add player */}
        <Stack.Screen name="AddPlayer" component={AddPlayerScreen} options={{title:'Add Players'}} />
      </Stack.Navigator>
  );
}

export default PlayerStackNav;