import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'

const Layout = () => {
  return (
    <View className='bg-[#22282c] flex-1'>
      <StatusBar style="light" backgroundColor="#404c54" translucent={false} />
      <Navbar/>
        <Slot/>
      <Toolbar/>
    </View>
  )
}

export default Layout