import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { useColorScheme } from "nativewind";

const Bookmark = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View>
      <LinearGradient
        colors={[colorScheme === 'dark' ? '#19b1ae' : '#2AB2AF', colorScheme === 'dark' ? '#45fffc' : '#7DC694']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className='p-3 mx-3 rounded-xl'
      >
        <View
          className='justify-center items-center'
        >
          <View
            className='p-1 bg-white rounded-lg mb-2'
          >
            <Image
              source={require('../assets/image/bookmark-quran.png')}
              className='w-[50px] h-[50px]'
            />
          </View>
          <Text className='text-white font-bold text-lg'>Bookmark Surah</Text>
          <Text className='text-white w-[70%] text-center'>Bookmark surat yang kamu ingin baca dilain waktu.</Text>
        </View>
      </LinearGradient>

      {/* list item */}
      <View
        className='bg-white p-3 mx-3 my-3 rounded-xl'
      >
        <Text className='text-center'>Data Kosong</Text>
      </View>
    </View>
  )
}

export default Bookmark