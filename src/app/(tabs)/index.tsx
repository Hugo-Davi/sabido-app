import { useEffect } from "react";
import { View, Text } from "react-native";

export default function Home() {
    
    useEffect(() => {
        console.log('salve');
        
   }, [])

    return (
        <View>
            <Text style={{fontSize: 44}}>
                Decks
            </Text>
            <View>

            </View>
        </View>
    )
}