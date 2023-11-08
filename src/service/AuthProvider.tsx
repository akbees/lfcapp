import {createContext, useState, PropsWithChildren, FC} from 'react';

const loginCredential = {
  username: 'root',
  password: 'secret001',
};

type AuthContextType = {
  isLoggedIn: boolean,
  loginCheck: (username: string, password: string) => boolean,
  setIsLoggedIn: (status: boolean) => void,
};

const AuthContextDefault = {
  isLoggedIn: false,
  loginCheck: (username: string, password: string) => false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
};

export const AuthContext = createContext<AuthContextType>(AuthContextDefault);

const AuthProvider: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  const AuthContextValue = {
    isLoggedIn: isLoggedIn,
    loginCheck: loginCheck,
    setIsLoggedIn: setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
