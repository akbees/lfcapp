import React from 'react';
import { FixtureList } from '../service/GameService';
import FixtureListItem from '../component/FixtureListItem';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function FixtureScreen(): JSX.Element {
  return(
    <View>
      <FlatList style={{height:'100%'}}
        data={FixtureList}
        renderItem={({ item, index, separators }) => FixtureListItem(item) }
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

export default FixtureScreen;
