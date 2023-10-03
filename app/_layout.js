import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'
import { useColorScheme } from 'nativewind'
import { LinearGradient } from 'expo-linear-gradient'

const Layout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View>
      <View
        className='bg-white h-10 absolute top-0 right-0 left-0 z-10'
      >
      </View>
      <ScrollView
        className='mt-10'
      >
        <LinearGradient
          colors={[colorScheme === 'dark' ? '#22282c' : '#e7fafe', colorScheme === 'dark' ? '#22282c' : '#67d1fc']}
          className='flex-1 min-h-screen'
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