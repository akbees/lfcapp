import React, { useContext, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
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
        navigation.replace('PlayersList');
      }, 2000);
    }

  };

  return (
    <View>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => navigation.replace('PlayersList')} >
          <Text style={styles.btn} >Players List</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('AddPlayer')} >
          <Text style={styles.btn} >Add Player</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Squad Number</Text>
        <TextInput
          inputMode='numeric'
          style={styles.input}
          onChangeText={(text) => setSquadNo(text)}
          value={squadNo}
        />
        <View><Text style={styles.errorText}>{squadNoError}</Text></View>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <View><Text style={styles.errorText}>{nameError}</Text></View>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Age</Text>
        <TextInput inputMode='numeric'
          style={styles.input}
          onChangeText={(text) => setAge(text)}
          value={age}
        />
        <View><Text style={styles.errorText}>{ageError}</Text></View>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Position</Text>
        <Picker
          style={{ color: 'teal' }}
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
      </View>

      <View style={styles.formAction}>
        <TouchableOpacity onPress={() => addPlayerHandler()}>
          <Text style={styles.formBtn}>Add</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  formRow: {
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 25,
    padding: 5,
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
    marginBottom: 3,
  },
  errorText: {
    color: 'red',
    marginLeft: 16,
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
  links: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'teal',
    color: 'white',
    width: 'auto',
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 14
  },
});

export default AddPlayerScreen;
