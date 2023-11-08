import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PlayerListScreen(): JSX.Element {
  
  return(
    <View><Text>Players</Text></View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default PlayerListScreen;
