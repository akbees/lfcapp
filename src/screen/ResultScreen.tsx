import React from 'react';
import { ResultList } from '../service/GameService';
import ResultListItem from '../component/ResultListItem';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function ResultScreen(): JSX.Element {
  return(
    <View>
      <FlatList style={{height:'100%'}}
        data={ResultList}
        renderItem={({ item, index, separators }) => ResultListItem(item) }
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
