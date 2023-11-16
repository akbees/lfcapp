import React from 'react';
import { ResultList } from '../service/GameService';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import GameListItem from '../component/GameListItem';

function ResultScreen(): JSX.Element {
  return (
    <View>
      <FlatList style={{ height: '100%' }}
        data={ResultList}
        renderItem={({ item, index, separators }) => GameListItem(item)}
        keyExtractor={game => game.id}
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

export default ResultScreen;
