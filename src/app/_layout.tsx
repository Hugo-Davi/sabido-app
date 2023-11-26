import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Home from './(tabs)'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen
            name='(tabs)'
            options={{
                title: 'Home'
            }}
        />
        <Stack.Screen
            name='index'
            options={{
            }}
        />
    </Stack>
  )
}