import { View, Text, Button } from 'react-native'
import React from 'react'


export default function DeckCell() {
  return (
    <View style={{backgroundColor: 'red'}}>
        <View>
            <Text style={{fontSize:33}}>Salve</Text>
        </View>
        <View>
            <Button
              onPress={() => console.log('bom dia familia')}
              title='Study'
              color='000'
            />
        </View>
    </View>
  )
}