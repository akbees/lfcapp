import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function AddPlayerScreen({navigation}:any): JSX.Element {

  return (
    <View>
    <Button title='Show Players List' onPress={() => navigation.navigate('PlayersList')} />
    <Button title='Add Player' onPress={() => navigation.navigate('AddPlayer')} />
      <Text>Add Player</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AddPlayerScreen;
