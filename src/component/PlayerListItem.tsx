import React, { FC } from "react";
import { Button, Image, Text, View } from "react-native";
import { playerType } from "../service/PlayerProvider";
import { playerNavParamsType } from "./Navigation/PlayerStackNav";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function PlayerListItem(player: playerType, navigation: NativeStackNavigationProp<playerNavParamsType>): JSX.Element {
    return (
        <View>
            <Text>{player.name}</Text>
            <Text>{player.position}</Text>
            <Button title='Show Player Details' onPress={() => navigation.navigate('PlayerDetails', {player})} />
        </View>
    );
};

export default PlayerListItem;

