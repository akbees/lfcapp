import React, { useContext } from 'react';
import { createContext, useState, PropsWithChildren, FC } from 'react';
import playersData from '../data/playersData.json';
import { LoaderContext } from './LoaderProvider';

export type playerType = {
  "squadNo": string,
  "name": string,
  "age": number,
  "position": string,
};

type PlayerDataContextType = {
  playerList: Array<playerType>,
  addPlayer: (playerList: playerType) => boolean,
};

const PlayerDataContextDefault = {
  playerList: [],
  addPlayer: (playerList: playerType) => { return false },
};

export const PlayerDataContext = createContext<PlayerDataContextType>(PlayerDataContextDefault);

const PlayerDataProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [playerList, setPlayerList] = useState(playersData);
  const { isLoaderDisplay, toggleLoader } = useContext(LoaderContext);

  const addNewPlayer = (player: playerType) => {
    try {
      let tempList = playerList;

      tempList.push(player);
      setPlayerList(tempList);
      
      return true;
    } catch (e) {
      return false;
    }
  };

  const PlayerDataContextValue = {
    playerList: playerList,
    addPlayer: addNewPlayer
  };

  return (
    <PlayerDataContext.Provider value={PlayerDataContextValue}>
      {children}
    </PlayerDataContext.Provider>
  );
};

export default PlayerDataProvider;
