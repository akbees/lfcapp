import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function LoginScreen({navigation, route}:any): JSX.Element {
  return(
    <View>
      <Text>Login</Text>
      <Text>Message: {route.params.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default LoginScreen;
