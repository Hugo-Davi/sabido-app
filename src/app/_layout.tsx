import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import Home from './(tabs)'

import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { useThemeContext } from '@/contexts/UseThemeContext'

export default function _layout() {
  const { theme, color } = useThemeContext()
  return (
    <Stack
        screenOptions={{
          contentStyle: { backgroundColor: 'red' }
        }}>
        <Stack.Screen
            name='(tabs)'
            options={{
                headerShown: false,
                title: 'Home'
            }}
        />
    </Stack>
  )
}