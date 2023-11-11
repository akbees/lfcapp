
import React, { FC } from "react";
import { Text, View } from "react-native";
import { GameDataType } from "../service/GameService";

function FixtureListItem(game: GameDataType):JSX.Element {
    return (
        <View>
            <Text>{game.id}</Text>
            <Text>{game.date}</Text>
            <Text>{game.home} V {game.away}</Text>
        </View>
    );
};

export default FixtureListItem;

