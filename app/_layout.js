import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'
import { useColorScheme } from 'nativewind'
import { LinearGradient } from 'expo-linear-gradient'

const Layout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className={`flex-1 ${colorScheme === 'dark' ? 'bg-[#7f9caf]' : 'bg-white'}`}>
      <ScrollView>
        <LinearGradient
          colors={[colorScheme === 'dark' ? '#22282c' : '#e7fafe', colorScheme === 'dark' ? '#22282c' : '#67d1fc']}
          className='flex-1 mt-[40px] min-h-screen'
        >
          <Navbar/>
          <Slot/>
        </LinearGradient>
      </ScrollView>
      <Toolbar/>
    </View>
  )
}

export default Layout