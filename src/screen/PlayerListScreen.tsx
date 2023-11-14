import React, { useContext } from 'react';
import { Button, FlatList, TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PlayerDataContext } from '../service/PlayerProvider';
import PlayerListItem from '../component/PlayerListItem';

function PlayerListScreen({ navigation }: any): JSX.Element {
  const { playerList } = useContext(PlayerDataContext);

  return (
    <View>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => navigation.replace('PlayersList')} >
          <Text style={styles.btn} >Players List</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('AddPlayer')} >
          <Text style={styles.btn} >Add Player</Text>
        </TouchableOpacity>
      </View>
      <FlatList style={{ height: '92%' }}
        data={playerList}
        renderItem={({ item, index, separators }) => PlayerListItem(item, navigation)}
        keyExtractor={player => player.squadNo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  links: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'teal',
    color: 'white',
    width: 'auto',
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 14
  },
});

export default PlayerListScreen;
