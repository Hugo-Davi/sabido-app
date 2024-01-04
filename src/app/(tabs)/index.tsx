import Teste from "@/components/Teste";
import { View, Text } from "react-native";
import DeckCell from "@/components/DeckCell";
import { useThemeContext } from "@/contexts/UseThemeContext";

export default function Home () {
    const { theme, color } = useThemeContext();

    return (
        <View style={{backgroundColor: theme.background}}>
            <Teste />
            <DeckCell />
        </View>
    )
}