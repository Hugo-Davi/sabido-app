import { View, Text } from 'react-native'
import React from 'react'

import { selectedTheme } from '@/constants/Themes'

export default function DeckCell() {
  return (
    <View style={{backgroundColor: selectedTheme.background}}>
        <View>
            <Text style={{fontSize:33}}>Salve</Text>

        </View>
        <View></View>
    </View>
  )
}