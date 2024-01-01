import Teste from "@/components/Teste";
import { View, Text } from "react-native";
import DeckCell from "@/components/DeckCell";
import { useThemeContext } from "@/contexts/UseThemeContext";

export default function Home () {
    const theme = useThemeContext();

    return (
        <View style={{backgroundColor: theme.state.background}}>
            <Text style={{fontSize: 44}}>
                Home
            </Text>
            <Teste />
            <DeckCell />
        </View>
    )
}