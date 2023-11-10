import React, { FC } from "react";
import { Button, Image, Text, View } from "react-native";
import { playerType } from "../service/PlayerProvider";
import { useNavigation } from "@react-navigation/native";
import { playerNavParamsType } from "./Navigation/PlayerStackNav";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const PlayerListItem:FC<playerType> = (player: playerType) => {
    const navigation = useNavigation<NativeStackNavigationProp<playerNavParamsType>>();
    return (
        <View>
            {/* <Image source={require('../images/')} /> */}
            <Text>{player.name}</Text>
            <Text>{player.position}</Text>
            <Button title='Show Player Details' onPress={() => navigation.navigate('PlayerDetails', {player})} />
        </View>
    );
};

export default PlayerListItem;

