import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'
import { useColorScheme } from 'nativewind'

const Layout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className={`flex-1 ${colorScheme === 'dark' ? 'bg-[#7f9caf]' : 'bg-white'}`}>
      <ScrollView className={`flex-1 ${colorScheme === 'dark' ? 'bg-[#22282c]' : 'bg-[#67d1fc]'} mt-[40px]`}>
        <Navbar/>
        <Slot/>
      </ScrollView>
      <Toolbar/>
    </View>
  )
}

export default Layout