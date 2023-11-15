import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AuthContext } from '../service/AuthProvider';
import { rootNavParamsType } from '../component/Navigation/RootAppNav';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


function LoginScreen({ navigation, route }: any): JSX.Element {
  const rootNavigation = useNavigation<NativeStackNavigationProp<rootNavParamsType>>();
  const { login } = useContext(AuthContext);

  return (
    <View>
      <Text>Login</Text>
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
