export interface IThemeValues {
    background: string;
    color: string;
    bordercolor: string;
    name: string;
}

export interface ITheme {
    light: IThemeValues
    dark: IThemeValues;
}