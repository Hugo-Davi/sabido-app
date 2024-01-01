import React, { ReactNode, createContext, useState } from 'react';
import { theme } from '@/constants/Themes';
import { IThemeValues } from '@/interfaces/ITheme';

// TYPES - BEGIN
type PropThemeContextType = {
    state: IThemeValues;
    setState: React.Dispatch<React.SetStateAction<IThemeValues>>;
}
type ChildrenProp = {
    children: React.ReactNode;
}
// TYPES - END

const DEFAULT_VALUE = {
    state: {
        ...theme.dark
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