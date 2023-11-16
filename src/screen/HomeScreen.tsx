import React from 'react';
import {
  SectionList,
  StyleSheet,
  View,
} from 'react-native';
import { ResultList, FixtureList } from '../service/GameService';
import { Text } from 'react-native';
import GameListItem from '../component/GameListItem';

function HomeScreen(): JSX.Element {

  const gamesData = [
    {
      title: 'Last Five Results',
      data: ResultList.slice(-5)
    },
    {
      title: 'Next Five Fixtures',
      data: FixtureList.slice(-5)
    },
  ]
    ;

  return (
      <View style={{padding: 10}}>
        <SectionList
          sections={gamesData}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (GameListItem(item))}
          renderSectionHeader={
            ({ section: { title } }) => (
              <Text style={styles.sectionListTitle}>
                {title}
              </Text>
            )
          }
          SectionSeparatorComponent={() => (
            <View style={{ borderTopColor: 'teal', borderTopWidth: 1 }}><Text></Text></View>
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
    marginBottom: 5,
    marginHorizontal: 25,
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  sectionListTitle: {
    color: 'black',
    fontSize:18,
    textAlign: 'center',
  }
});

export default HomeScreen;
