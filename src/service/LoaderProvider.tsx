import { createContext, useState, PropsWithChildren, FC } from 'react';
import Loader from '../component/Loader';

type LoaderContextType = {
    isLoaderDisplay: boolean,
    toggleLoader: (isLoggedIn: boolean) => void,
};

const LoaderContextDefault = {
    isLoaderDisplay: false,
    toggleLoader: (isLoggedIn: boolean) => { },
};

export const LoaderContext = createContext<LoaderContextType>(LoaderContextDefault);

const LoaderProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    const [isLoaderDisplay, toggleLoader] = useState(false);

    const LoaderContextValue = {
        isLoaderDisplay: isLoaderDisplay,
        toggleLoader: toggleLoader,
    };

    return (
        <LoaderContext.Provider value={LoaderContextValue}>
            {children}
            { (isLoaderDisplay) ? <Loader /> : null }
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;
