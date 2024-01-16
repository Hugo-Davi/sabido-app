import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Cards } from "@/constants/mock";

export default function Home() {
    const [cards, setCards] = useState<typeof Cards>(Cards)
    useEffect(() => {
        async function getData() {
            const response = Cards;
            setCards(response);
        }
        getData()
   }, [])

    return (
        <View>
            <Text style={{fontSize: 44}}>
                Decks
                <Button onPress={() => console.log(cards)} title="aperta" color="red" />
            </Text>
            {cards.map((card) => {
                return(<Text key={card._id}>{card._id}</Text>)
            })}
            <View>

            </View>
        </View>
    )
}