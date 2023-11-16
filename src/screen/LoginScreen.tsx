import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../service/AuthProvider';

function LoginScreen({ navigation, route }: any): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  function loginHandler() {
    let isLogin = login(username, password);

    if(!isLogin) {
      console.log("implement alert!");
    }
  }

  return (
    <View>
      <View style={styles.appLogo}>
        <Image
          style={styles.logoPlaceholder}
          source={require('../images/emblem.png')}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <View style={styles.formAction}>
        <TouchableOpacity onPress={() => loginHandler()}>
          <Text style={styles.formBtn}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8
  },
  logoPlaceholder: {
    justifyContent:'center',
    width: 200,
    height:200,
  },
  formContainer: {
    marginVertical: 15,
    marginBottom: 5,
    marginHorizontal: 25,
    paddingHorizontal: 5,
    paddingBottom: 15,
    flexDirection: 'column',
    backgroundColor: "rgb(229, 228, 226)",
    borderRadius: 8,
  },
  input: {
    height: 35,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  label: {
    color: 'teal',
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 3,
  },
  formAction: {
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 25,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  formBtn: {
    color: 'white',
    backgroundColor: 'teal',
    width: 'auto',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default LoginScreen;
