import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PlayerDetailScreen({ route }: any): JSX.Element {
  const player = route.params.player;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Squad No</Text>
      <Text style={styles.detail}>{player.squadNo}</Text>

      <Text style={styles.label}>Name</Text>
      <Text style={styles.detail}>{player.name}</Text>

      <Text style={styles.label}>Age</Text>
      <Text style={styles.detail}>{player.age} years old</Text>

      <Text style={styles.label}>Position</Text>
      <Text style={styles.detail}>{player.position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 25,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "rgb(229, 228, 226)",
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16
  },
  detail: {
    color: 'teal',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  }
});

export default PlayerDetailScreen;
