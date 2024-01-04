import { View, Text, Button } from 'react-native'
import React from 'react'
import { useThemeContext } from '@/contexts/UseThemeContext'


export default function DeckCell() {
  const { theme, color, setTheme } = useThemeContext()

  return (
    <View style={{backgroundColor: 'red'}}>
        <View>
            <Text style={{fontSize:33}}>Salve</Text>
        </View>
        <View>
            <Button
              onPress={() => setTheme}
              title='Study'
              color='000'
            />
        </View>
    </View>
  )
}