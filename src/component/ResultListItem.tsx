import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameDataType } from "../service/GameService";

function ResultListItem(game: GameDataType): JSX.Element {
    return (
        <View style={styles.item}>
            <Text style={styles.itemDate}>{game.date}</Text>
            <View style={styles.resultData}>
                <Text style={styles.home}>{game.home}</Text>
                <Text style={styles.score}>{game.score}</Text>
                <Text style={styles.away}>{game.away}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginTop: 8,
        marginBottom: 5,
        marginHorizontal: 25,
        padding: 5,
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: "rgb(229, 228, 226)",
        borderRadius: 8,
    },
    itemDate: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    resultData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    home: {
        width: "40%",
        textAlign: 'right',
        color: "teal",
        fontSize: 16,
        fontWeight: 'bold',
    },
    score: {
        width: "15%",
        textAlign: 'center',
        color: "teal",
        fontSize: 14,
        fontWeight: 'bold',
    },
    away: {
        width: "40%",
        textAlign: 'left',
        color: "teal",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ResultListItem;

