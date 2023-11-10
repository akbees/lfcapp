import React from 'react';
import AuthProvider from './src/service/AuthProvider';
import LoaderProvider from './src/service/LoaderProvider';
import RootAppNav from './src/component/Navigation/RootAppNav';
import PlayerDataProvider from './src/service/PlayerProvider';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <LoaderProvider>
        <PlayerDataProvider>
          <RootAppNav />
        </PlayerDataProvider>
      </LoaderProvider>
    </AuthProvider>
  );
}

export default App;