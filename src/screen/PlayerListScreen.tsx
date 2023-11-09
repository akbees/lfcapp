import React from 'react';
import { Button } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PlayerListScreen({ navigation }: any): JSX.Element {

  return (
    <View>
      <Button title='Show Players List' onPress={() => navigation.navigate('PlayersList')} />
      <Button title='Add Player' onPress={() => navigation.navigate('AddPlayer')} />
      <Text>Players</Text>
      <Button title='Show Player Details' onPress={() => navigation.navigate('PlayerDetails', { id: 123 })} />
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
