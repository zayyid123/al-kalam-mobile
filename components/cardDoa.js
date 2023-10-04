import React from 'react'
import { Text, View } from 'react-native'
import { useColorScheme } from "nativewind";

const CardDoa = ({ data }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View
      className='mb-3'
    >
      {/* title */}
      <View
        className='bg-white rounded-lg p-3 mb-3'
      >
        <Text
          className='font-semibold text-base'
        >
          {data.doa}
        </Text>
      </View>

      {/* ayat */}
      <View
        className='mx-3 my-4'
      >
        <Text style={{ fontFamily: 'LPMQIsepMisbah', fontSize: 25, color: `${colorScheme === 'dark' ? '#fff' : '#166534'}` }}>{data.ayat}</Text>
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
        <Text className={`${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>{data.artinya}</Text>
      </View>
    </View>
  )
}

export default CardDoa