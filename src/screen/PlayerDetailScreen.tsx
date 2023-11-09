import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PlayerDetailScreen({ navigation, route }: any): JSX.Element {
  const player = route.params.player;
  
  return (
    <View>
      <Text>Players</Text>
      <Text>Id: {player.id}</Text>
      <Text>Name: {player.name}</Text>
      <Text>Position: {player.position}</Text>
      <Text>Age: {player.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default PlayerDetailScreen;
