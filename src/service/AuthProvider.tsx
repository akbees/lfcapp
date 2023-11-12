import {createContext, useState, PropsWithChildren, FC} from 'react';

const loginCredential = {
  username: 'root',
  password: 'secret001',
};

type AuthContextType = {
  isLoggedIn: boolean,
  login: (username: string, password: string) => boolean,
  logout: () => void,
};

const AuthContextDefault = {
  isLoggedIn: false,
  login: (username: string, password: string) => false,
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(AuthContextDefault);

const AuthProvider: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginCheck = (username: string, password: string) => {
    if (
      loginCredential.username == username &&
      loginCredential.password == password
    ) {
      return true;
    } else {
      return false;
    }
  };

  const logoutHandler = ()=>{
    setIsLoggedIn(false);
  };

  const AuthContextValue = {
    isLoggedIn: isLoggedIn,
    login: loginCheck,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
