import React from 'react'
import AuthProvider from './src/service/AuthProvider';
import LoaderProvider from './src/service/LoaderProvider';
import RootAppNav from './src/component/Navigation/RootAppNav';

function App(): JSX.Element {

  return (
    <LoaderProvider>
      <AuthProvider>
        <RootAppNav />
      </AuthProvider>
    </LoaderProvider>
  );
}

export default App;