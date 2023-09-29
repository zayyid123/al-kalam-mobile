import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Navbar from '../components/navbar'
import Toolbar from '../components/toolbar'

const Layout = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#22282c]'>
      <StatusBar style="light" backgroundColor="#404c54" translucent={false} />
      <Navbar/>
      <Slot/>
      <Toolbar/>
    </SafeAreaView>
  )
}

export default Layout