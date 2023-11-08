import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../service/AuthProvider';

const Navigation = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <TabNav /> : <StackNav />} */}
      {/* guest navigator
      *   list -> stack nav (guest): list, detail
      *   register -> stack nav (admin nav): addPlayer, login
      *
       */}
      {/* guest navigator */}
    </NavigationContainer>
  );
};

export default Navigation;
