import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Button
        title='oi'
        onPress={() => router.push('(tabs)')}
        />
    </View>
  )
}