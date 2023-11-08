import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Fa from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons';


function App(): JSX.Element {
  
  return(
    <>
    <Fa name="house-chimney" size={30} color="teal" />
    <Fa name="person-running" size={30} color="teal" />
    <Fa name="user-plus" size={30} color="teal" />
    <AntDesign name="addusergroup" size={30} color="teal" />
    <MatCom name="soccer-field" size={30} color="teal" />
    <MatCom name="soccer" size={30} color="teal" />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
