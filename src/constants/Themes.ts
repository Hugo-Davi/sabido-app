import { ITheme, IThemeValues } from "@/interfaces/ITheme";

const light: IThemeValues = {
    background: '#D9D9D9',
    color: '#FEF6FF',
    bordercolor: '#242527',
    name: 'light'
}

const dark: IThemeValues = {
    background: '#1E1E1E',
    color: '#242527',
    bordercolor: '#DBDBDB',
    name: 'dark'
}

export const theme: ITheme = {
    light: {
        ...light
    },
    dark: {
        ...dark
    }
}

export let selectedTheme: IThemeValues = {
    ...dark
}