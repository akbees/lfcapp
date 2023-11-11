import React, { FC } from "react";
import { Text, View } from "react-native";
import { GameDataType } from "../service/GameService";

function ResultListItem(game: GameDataType):JSX.Element {
    return (
        <View>
            <Text>{game.id}</Text>
            <Text>{game.date}</Text>
            <Text>{game.home} {game.score} {game.away}</Text>
        </View>
    );
};

export default ResultListItem;

