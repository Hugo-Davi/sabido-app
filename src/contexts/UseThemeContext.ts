import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const useThemeContext = () => {
    const themeContext = useContext(ThemeContext);

    if (themeContext === undefined) {
        throw new Error('useThemeContext themeContext === undefined error')
    }

    const color = themeContext.state.defaultcolor;
    const theme = themeContext.state.theme;
    const setTheme = themeContext.setState;

    return {theme, color, setTheme};
}

export { useThemeContext };