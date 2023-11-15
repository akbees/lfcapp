import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerListScreen from '../../screen/PlayerListScreen';
import AddPlayerScreen from '../../screen/AddPlayerScreen';
import PlayerDetailScreen from '../../screen/PlayerDetailScreen';
import { playerType } from '../../service/PlayerProvider';
import { AuthContext } from '../../service/AuthProvider';
import LogoutBtn from '../LogoutBtn';

export type playerNavParamsType = {
  PlayersList: undefined,
  PlayerDetails: { player: playerType },
  AddPlayer?: { message: string }
};

const PlayerStackNav = () => {
  const Stack = createNativeStackNavigator<playerNavParamsType>();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName='PlayersList'
      screenOptions={
        {
          headerRight: () => {
            return isLoggedIn ? <LogoutBtn /> : null;
          }
        }
      }
    >
      <Stack.Screen name="PlayersList" component={PlayerListScreen} options={{ title: 'Players List' }} />
      <Stack.Screen name="PlayerDetails" component={PlayerDetailScreen} options={{ title: 'Players Details' }} />
      <Stack.Screen name="AddPlayer" component={AddPlayerScreen} options={{ title: 'Add Players' }} />
    </Stack.Navigator>
  );
}

export default PlayerStackNav;
