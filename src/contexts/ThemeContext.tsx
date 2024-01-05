import React, { ReactNode, createContext, useReducer, useState } from 'react';
import { IThemeValues, IThemeState, themeState, defaultcolor, dark, light } from '@/constants/Themes';

// TYPES - BEGIN
type PropThemeContextType = {
    state: IThemeState;
    setState: React.Dispatch<React.SetStateAction<IThemeState>>;
}
type ChildrenProp = {
    children: React.ReactNode;
}
// TYPES - END

// const setTheme = (selectedTheme: string) => {
//     console.log('settheme processado')
//     switch (selectedTheme) {
//         case 'dark':
//             const darkTheme:IThemeState = {
//                 theme: dark,
//                 defaultcolor: defaultcolor
//             }
//             setState(darkTheme)
//             break;
//         case 'light':
//             const lightTheme:IThemeState = {
//                 theme: light,
//                 defaultcolor: defaultcolor
//             }
//             setState(lightTheme)
//             break;
//         default:
//             const defaultTheme:IThemeState = {
//                 theme: dark,
//                 defaultcolor: defaultcolor
//             }
//             setState(defaultTheme)
//             break;
//     }
// }

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