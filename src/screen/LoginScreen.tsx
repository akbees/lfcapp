import React, { useContext } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AuthContext } from '../service/AuthProvider';


function LoginScreen({ navigation, route }: any): JSX.Element {
  const { login, isLoggedIn } = useContext(AuthContext);
  setTimeout(() => {
    // log user in 
    // revert back to add player after login
    // on click btn
    login("root", "secret001");
  }, 2000);

  return (
    <View>
      <Text>Login</Text>
      <Text>Message: {route.params.message}</Text>
      {
        (isLoggedIn)
          ?
          <Button title="go back" onPress={() => navigation.goBack()} />
          :
          null
      }
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
