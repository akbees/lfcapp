import React, { useContext } from 'react';
import { Button, FlatList } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PlayerDataContext, playerType } from '../service/PlayerProvider';
import PlayerListItem from '../component/PlayerListItem';

function PlayerListScreen({ navigation }: any): JSX.Element {
  const { playerList } = useContext(PlayerDataContext);

  function renderPlayer(player: playerType): JSX.Element {
    return (
      <PlayerListItem squadNo={player.squadNo} name={player.name} position={player.position} age={player.age} />
    );
  }

  return (
    <View>
      <Button title='Show Players List' onPress={() => navigation.replace('PlayersList')} />
      <Button title='Add Player' onPress={() => navigation.replace('AddPlayer')} />
      <Text>Players</Text>
      <FlatList style={{height:'84%'}}
        data={playerList}
        renderItem={({ item, index, separators }) => renderPlayer(item)}
        keyExtractor={player => player.squadNo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 45,
    height: 45,
    margin: 10,
  },
});

export default PlayerListScreen;
