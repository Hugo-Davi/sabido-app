import { View, Text, Button } from 'react-native'
import React from 'react'
import { useThemeContext } from '@/contexts/UseThemeContext'
import { dark, defaultcolor, light } from '@/constants/Themes'


export default function DeckCell() {
  const { theme, color, setTheme } = useThemeContext()

  return (
    <View style={{backgroundColor: theme.background}}>
        <View>
            <Text style={{fontSize:33}}>Salve</Text>
        </View>
        <View>
            <Button
              onPress={() => setTheme({theme: light, defaultcolor: defaultcolor})}
              title='Study'
              color='000'
            />
        </View>
    </View>
  )
}