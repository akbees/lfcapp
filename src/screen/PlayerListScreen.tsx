import React, { useContext } from 'react';
import { Button, FlatList } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PlayerDataContext, playerType } from '../service/PlayerProvider';
import PlayerListItem from '../component/PlayerListItem';

// const PlayerListItem= (player:playerType)=> {
// return (
//   <View><Text>{player.name}</Text></View>
// );
//   };

function PlayerListScreen({ navigation }: any): JSX.Element {
  const {playerList} = useContext(PlayerDataContext);

  function renderPlayer(player: playerType): JSX.Element {
    return (
      <PlayerListItem id={player.id} name={player.name} position={player.position} age={player.age} />
    );
  }

  return (
    <View>
      <Button title='Show Players List' onPress={() => navigation.navigate('PlayersList')} />
      <Button title='Add Player' onPress={() => navigation.navigate('AddPlayer')} />
      <Text>Players</Text>
      <FlatList
        data={playerList}
        renderItem={({item, index, separators}) => renderPlayer(item) }
        keyExtractor={player => player.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default PlayerListScreen;
