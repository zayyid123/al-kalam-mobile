import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';

// icon
import IconBackWhite from '../assets/icons/back-icon_putih.svg'

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const handleBack = () => {
    if ( router.canGoBack() )
      router.goBack();
    else
      router.replace('/')
  }

  return (
    <View className='my-4 mx-3 flex-row justify-between items-center'>
      {/* back */}
      <TouchableOpacity
        onPress={() => 
          handleBack()
        }
      >
        <View className='p-2 justify-center'>
          <IconBackWhite width={20} height={20}/>
        </View>
      </TouchableOpacity>

      {/* name */}
      <Text className='text-white font-semibold text-lg'>Al-Kalam</Text>
      
      {/* night mode */}
      <TouchableOpacity
        onPress={toggleColorScheme}
      >
        <View className='p-2 justify-center'>
          {
            colorScheme === 'dark' ?
            <Image source={require('../assets/image/night-mode.png')}
              style={{
                height: 30,
                width: 30
              }}
            />
            :
            <Image source={require('../assets/image/light-mode.png')}
              style={{
                height: 30,
                width: 30
              }}
            />
          }
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar