import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { playerType } from "../service/PlayerProvider";
import { playerNavParamsType } from "./Navigation/PlayerStackNav";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function PlayerListItem(player: playerType, navigation: NativeStackNavigationProp<playerNavParamsType>): JSX.Element {

    const positionIconSource = (position: string) => {
        if (position === "Goalkeeper") {
            return (require("../images/goalkeeper.png"));
        }

        if (position === "Defender") {
            return (require("../images/defender.png"));
        }

        if (position === "Midfielder") {
            return (require("../images/midfielder.png"));
        }

        if (position === "Forward") {
            return (require("../images/forward.png"));
        }
    };
    return (
        <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('PlayerDetails', { player })} >
            <View style={styles.playerItem}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={positionIconSource(player.position)}
                    />
                </View>
                <View>
                    <Text style={styles.playerName}>{player.name}</Text>
                    <Text>{player.position}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    playerItem: {
        marginTop: 8,
        marginBottom: 5,
        marginHorizontal: 25,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: "rgb(229, 228, 226)",
        borderRadius: 8,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    playerName: {
        color: 'teal',
        fontSize: 18
    },
});

export default PlayerListItem;

