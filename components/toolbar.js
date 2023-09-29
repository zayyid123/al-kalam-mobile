import React, { useState } from 'react'
import { Pressable, View } from 'react-native'

// svg
import IconPerson from '../assets/icons/person.svg'
import IconHome from '../assets/icons/home.svg'
import IconBookmark from '../assets/icons/bookmark.svg'

const Toolbar = () => {
  const [isPersonClicked, setisPersonClicked] = useState(false)
  const [isHomeClicked, setisHomeClicked] = useState(false)
  const [isBookmarkClicked, setisBookmarkClicked] = useState(false)

  const handleClickPerson = () => {
    setisPersonClicked(!isPersonClicked)
    setisHomeClicked(false)
    setisBookmarkClicked(false)
  }

  const handleClickHome = () => {
    setisPersonClicked(false)
    setisHomeClicked(!isHomeClicked)
    setisBookmarkClicked(false)
  }

  const handleClickBookmark = () => {
    setisPersonClicked(false)
    setisHomeClicked(false)
    setisBookmarkClicked(!isBookmarkClicked)
  }

  return (
    <View className='bg-white rounded-t-xl absolute bottom-0 right-0 left-0'>
      <View className='flex-row justify-evenly items-center'>
        {/* person */}
        <Pressable
          onPress={() => {
            handleClickPerson()
          }}
        >
          <View className={`p-3 border-4 border-white ${isPersonClicked && 'border-[#22282c] rounded-full translate-y-[-40px] bg-[#f79d4a]'}`}>
            <IconPerson width={30} height={30}/>
          </View>
        </Pressable>

        {/* home */}
        <Pressable
          onPress={() => {
            handleClickHome()
          }}
        >
          <View className={`p-3 border-4 border-white ${isHomeClicked && 'border-[#22282c] rounded-full translate-y-[-40px] bg-[#f79d4a]'}`}>
            <IconHome width={30} height={30}/>
          </View>
        </Pressable>

        {/* bookmark */}
        <Pressable
          onPress={() => {
            handleClickBookmark()
          }}
        >
          <View className={`p-3 border-4 border-white ${isBookmarkClicked && 'border-[#22282c] rounded-full translate-y-[-40px] bg-[#f79d4a]'}`}>
            <IconBookmark width={30} height={30}/>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Toolbar