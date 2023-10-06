import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';

// svg
import IconHome from '../assets/icons/home.svg'
import IconBookmark from '../assets/icons/bookmark.svg'

const Toolbar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isDuaClicked, setisDuaClicked] = useState(false)
  const [isAdzanClicked, setisAdzanClicked] = useState(false)
  const [isHomeClicked, setisHomeClicked] = useState(false)
  const [isBookmarkClicked, setisBookmarkClicked] = useState(false)

  const handleClickAdzan = () => {
    setisDuaClicked(false)
    setisHomeClicked(false)
    setisAdzanClicked(!isAdzanClicked)
    setisBookmarkClicked(false)
    router.push('/adzan');
    setTimeout(() => {
      setisAdzanClicked(false)
    }, 500);
  }

  const handleClickDua = () => {
    setisDuaClicked(!isDuaClicked)
    setisHomeClicked(false)
    setisAdzanClicked(false)
    setisBookmarkClicked(false)
    router.push('/doa');
    setTimeout(() => {
      setisDuaClicked(false)
    }, 500);
  }

  const handleClickHome = () => {
    setisDuaClicked(false)
    setisHomeClicked(!isHomeClicked)
    setisAdzanClicked(false)
    setisBookmarkClicked(false)
    router.push('/');
    setTimeout(() => {
      setisHomeClicked(false)
    }, 500);
  }

  const handleClickBookmark = () => {
    setisDuaClicked(false)
    setisHomeClicked(false)
    setisAdzanClicked(false)
    setisBookmarkClicked(!isBookmarkClicked)
    router.push('/bookmark');
    setTimeout(() => {
      setisBookmarkClicked(false)
    }, 500);
  }

  return (
    <View className='bg-white rounded-t-xl absolute bottom-0 right-0 left-0'>
      <View className='flex-row justify-evenly items-center'>
        {/* home */}
        <Pressable
          className='items-center'
          onPress={() => {
            handleClickHome()
          }}
        >
          <View className={`p-3 border-4 border-white ${isHomeClicked && `${colorScheme === 'dark' ? 'border-[#22282c]' : 'border-[#67d1fc]'} rounded-full translate-y-[-30px] bg-[#f79d4a]`}`}>
            <IconHome width={23} height={23}/>
          </View>
          {
            isHomeClicked &&
            <Text className='absolute bottom-2 m-auto text-xs'>Home</Text>
          }
        </Pressable>

        {/* dua */}
        <Pressable
          className='items-center'
          onPress={() => {
            handleClickDua()
          }}
        >
          <View className={`p-3 border-4 border-white ${isDuaClicked && `${colorScheme === 'dark' ? 'border-[#22282c]' : 'border-[#67d1fc]'} rounded-full translate-y-[-30px] bg-[#f79d4a]`}`}>
            <Image source={require('../assets/image/praying.png')} className='w-[25px] h-[25px]'/>
          </View>
          {
            isDuaClicked &&
            <Text className='absolute bottom-2 m-auto text-xs'>Du'a</Text>
          }
        </Pressable>

        {/* adzan */}
        <Pressable
          className='items-center'
          onPress={() => {
            handleClickAdzan()
          }}
        >
          <View className={`p-3 border-4 border-white ${isAdzanClicked && `${colorScheme === 'dark' ? 'border-[#22282c]' : 'border-[#67d1fc]'} rounded-full translate-y-[-30px] bg-[#f79d4a]`}`}>
            <Image source={require('../assets/image/adzan.png')} className='w-[25px] h-[25px]'/>
          </View>
          {
            isAdzanClicked &&
            <Text className='absolute bottom-2 m-auto text-xs'>Adzan</Text>
          }
        </Pressable>

        {/* bookmark */}
        <Pressable
          className='items-center'
          onPress={() => {
            handleClickBookmark()
          }}
        >
          <View className={`p-3 border-4 border-white ${isBookmarkClicked && `${colorScheme === 'dark' ? 'border-[#22282c]' : 'border-[#67d1fc]'} rounded-full translate-y-[-30px] bg-[#f79d4a]`}`}>
            <IconBookmark width={23} height={23}/>
          </View>
          {
            isBookmarkClicked &&
            <Text className='absolute bottom-2 m-auto text-xs'>Bookmark</Text>
          }
        </Pressable>
      </View>
    </View>
  )
}

export default Toolbar