import GameData from "../data/gamesData.json";
export type GameDataType = {
    "id": string,
    "home": string,
    "away": string,
    "score": string,
    "date": string
};

export const ResultList = GameData.filter((result) => result.score != '');

export const FixtureList = GameData.filter((result) => result.score == '');
