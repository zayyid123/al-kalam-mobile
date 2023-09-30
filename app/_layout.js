import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'

const Layout = () => {
  return (
    <View className='flex-1 bg-[#7f9caf]'>
      <ScrollView className='flex-1 bg-[#22282c] mt-[40px]'>
        <Navbar/>
        <Slot/>
      </ScrollView>
      <Toolbar/>
    </View>
  )
}

export default Layout