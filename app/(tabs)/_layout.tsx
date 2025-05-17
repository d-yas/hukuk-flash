import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="saved" options={{ headerShown: false }} />
        <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  )
}

export default _layout