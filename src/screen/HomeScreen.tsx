import React, { useContext } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Fa from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoaderContext } from '../service/LoaderProvider';


function HomeScreen(): JSX.Element {

  const { isLoaderDisplay, toggleLoader } = useContext(LoaderContext);

  const loaderHandler = () => {
    toggleLoader(true)
    setTimeout(() => toggleLoader(false), 2000);
  };
  
  return (
    <>
      <Fa name="house-chimney" size={30} color="teal" />
      <Fa name="person-running" size={30} color="teal" />
      <Fa name="user-plus" size={30} color="teal" />
      <AntDesign name="addusergroup" size={30} color="teal" />
      <MatCom name="soccer-field" size={30} color="teal" />
      <MatCom name="soccer" size={30} color="teal" />
      <Button title='loader' onPress={() => loaderHandler()} />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
