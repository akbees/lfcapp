import React, { useContext } from 'react';
import { createContext, useState, PropsWithChildren, FC } from 'react';
import playersData from '../data/playersData.json';
import { LoaderContext } from './LoaderProvider';

export type playerType = {
  "id": string,
  "name": string,
  "age": number,
  "position": string,
};

type PlayerDataContextType = {
  playerList: Array<playerType>,
  addPlayer: (playerList: Array<playerType>) => void,
};

const PlayerDataContextDefault = {
  playerList: [],
  addPlayer: (playerList: Array<Object>) => { },
};

export const PlayerDataContext = createContext<PlayerDataContextType>(PlayerDataContextDefault);

const PlayerDataProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [playerList, setPlayerList] = useState(playersData);
  const { isLoaderDisplay, toggleLoader } = useContext(LoaderContext);  

  const addPlayer = (player: playerType) => {
    toggleLoader(true);
    let tempList = playerList;

    tempList.push(player);
    setPlayerList(tempList);
    toggleLoader(false);
  };

  const PlayerDataContextValue = {
    playerList: playerList,
    addPlayer: setPlayerList
  };

  return (
    <PlayerDataContext.Provider value={PlayerDataContextValue}>
      {children}
    </PlayerDataContext.Provider>
  );
};

export default PlayerDataProvider;
