import React, { useContext, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PlayerDataContext } from '../service/PlayerProvider';
import { TextInput } from 'react-native';
import { LoaderContext } from '../service/LoaderProvider';

function AddPlayerScreen({ navigation }: any): JSX.Element {
  const { isLoaderDisplay, toggleLoader } = useContext(LoaderContext);
  const { playerList, addPlayer } = useContext(PlayerDataContext);
  const [squadNo, setSquadNo] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [squadNoError, setSquadNoError] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [positionError, setPositionError] = useState('');

  const addPlayerHandler = () => {
    toggleLoader(true);

    if ((name || age || position) == '') {
      setSquadNoError('Squad No is mandatory');
      setNameError('Name is mandatory');
      setAgeError('Age is mandatory');
      setPositionError('Position is mandatory');

      setTimeout(() => {
        toggleLoader(false);
      }, 2000);

      return null;
    }

    let status = addPlayer({
      "squadNo": squadNo,
      "name": name,
      "age": Number(age),
      "position": position,
    });

    if (status) {
      setTimeout(() => {
        toggleLoader(false);
      }, 2000);
    }

  };

  return (
    <View>
      <Button title='Show Players List' onPress={() => navigation.replace('PlayersList')} />
      <Button title='Add Player' onPress={() => navigation.replace('AddPlayer')} />
      <Text>Add Player</Text>
      <Text>Squad Number</Text>
      <TextInput
        inputMode='numeric'
        style={styles.input}
        onChangeText={(text) => setSquadNo(text)}
        value={squadNo}
      />
      <View><Text style={styles.errorText}>{squadNoError}</Text></View>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <View><Text style={styles.errorText}>{nameError}</Text></View>

      <Text>Age</Text>
      <TextInput inputMode='numeric'
        style={styles.input}
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <View><Text style={styles.errorText}>{ageError}</Text></View>

      <Picker
        selectedValue={position}
        onValueChange={(itemValue, itemIndex) =>
          setPosition(itemValue)
        }>
        <Picker.Item label="Select Position" enabled={false} />
        <Picker.Item label="Goalkeeper" value="Goalkeeper" />
        <Picker.Item label="Defender" value="Defender" />
        <Picker.Item label="Midfielder" value="Midfielder" />
        <Picker.Item label="Forward" value="Forward" />
      </Picker>
      <View><Text style={styles.errorText}>{positionError}</Text></View>

      <Button title='Add Player' onPress={() => addPlayerHandler()} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorText: {
    color:'red',
  }
});

export default AddPlayerScreen;
