import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useColorScheme } from "nativewind";

// svg icon
import IconPin from '../assets/icons/pin.svg'
import IconShare from '../assets/icons/share.svg'

const CardAyat = ({ data }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View
      className='mb-4'
    >
      {/* bar */}
      <View
        className='bg-white p-1 rounded-full flex-row justify-between items-center'
      >
        {/* nomor ayat */}
        <View
          className='bg-[#32b0a8] w-[25px] h-[25px] rounded-full items-center justify-center'
        >
          <Text className='text-white'>{data.ayah}</Text>
        </View>

        {/* shared */}
        <View
          className='flex-row-reverse justify-between items-center min-w-[60px] ml-2'
        >
          {/* icon share */}
          <TouchableOpacity>
            <View>
              <IconShare width={25} height={25} />
            </View>
          </TouchableOpacity>

          {/* icon pin */}
          <TouchableOpacity>
            <View>
              <IconPin width={25} height={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* ayat */}
      <View
        className='mx-3 my-4'
      >
        <Text style={{ fontFamily: 'LPMQIsepMisbah', fontSize: 25, color: `${colorScheme === 'dark' ? '#fff' : '#166534'}` }}>{data.arabic}</Text>
      </View>

      {/* translate */}
      <View>
        <Text
          className={`${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          {
            data.latin
          }
        </Text>
      </View>

      {/* indo */}
      <View className='mt-2 mb-3'>
        <Text className={`${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>{data.translation}</Text>
      </View>
    </View>
  )
}

export default CardAyat