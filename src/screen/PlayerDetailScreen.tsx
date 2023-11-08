import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PlayerDetailScreen({ navigation, route }: any): JSX.Element {
  let id = route.params.id;
  console.log(route.params);
  
  return (
    <View>
      <Text>Players</Text>
      <Text>Id: {id}</Text>
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
