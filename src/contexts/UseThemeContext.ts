import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if (theme === undefined) {
        throw new Error('useThemeContext theme === undefined error')
    }

    return theme;
}

export { useThemeContext };