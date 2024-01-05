import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { dark, light, defaultcolor } from '@/constants/Themes'

const useThemeContext = () => {
    const {state, setState} = useContext(ThemeContext);

    if (state === undefined) {
        throw new Error('useThemeContext themeContext === undefined error')
    }

    setState({theme: light, defaultcolor: defaultcolor})

    const color = state.defaultcolor;
    const theme = state.theme;
    const setTheme = setState // themeContext.setState;

    return {theme, color, setTheme};
}

export { useThemeContext };