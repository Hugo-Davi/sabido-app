import React, { ReactNode, createContext, useReducer, useState } from 'react';
import { IThemeValues, IThemeState, themeState, dark, light } from '@/constants/Themes';

// TYPES - BEGIN
type PropThemeContextType = {
    state: IThemeState;
    setState: React.Dispatch<React.SetStateAction<IThemeState>>;
}
type ChildrenProp = {
    children: React.ReactNode;
}
// TYPES - END

const DEFAULT_VALUE = {
    state: {
        ...themeState
    },
    setState: () => {}
}

const ThemeContext = createContext<PropThemeContextType>(DEFAULT_VALUE);

const ThemeContextProvider = ({children}: ChildrenProp) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <ThemeContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }