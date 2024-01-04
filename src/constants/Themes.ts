export const defaultcolor = {
    purple: '#F79BFF',
    pink: '#F9B0FF',
    pinkLight: '#FBC8FF',
    yellow: '#FFDA57',
    green: '#2FFF82',
    blue: '#71E5FF',
    red: '#DA7878'
}

export interface IThemeValues {
    background: string;
    foreground: string;
    border: string;
    name: string;
}

export const light: IThemeValues = {
    background: '#D9D9D9',
    foreground: '#FEF6FF',
    border: '#242527',
    name: 'light'
}

export const dark: IThemeValues = {
    background: '#1E1E1E',
    foreground: '#242527',
    border: '#DBDBDB',
    name: 'dark'
}

export interface ITheme {
    light: IThemeValues
    dark: IThemeValues;
}

export const theme: ITheme = {
    light: {
        ...light
    },
    dark: {
        ...dark
    }
}

export interface IThemeState {
    theme: IThemeValues;
    defaultcolor: Object;
}

export const themeState: IThemeState = {
    theme: {
        ...dark
    },
    defaultcolor: {
        ...defaultcolor
    }
}