import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { useColorScheme } from "nativewind";

// svg icon
import IconPin from '../assets/icons/pin.svg'
import IconPined from '../assets/icons/pined.svg'
import IconShare from '../assets/icons/share.svg'

const CardAyat = ({ data, storeData, lastRead }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const [isClicked, setisClicked] = useState(false)
  const [isLoading, setisLoading] = useState(false)

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
          <TouchableOpacity
            onPress={async() => {
              await setisLoading(true)
              await setisClicked(true)
              await storeData('last_read', JSON.stringify(
                {
                  ayat: data.ayah,
                  noSurah: data.surah.id,
                  surah: data.surah.latin
                }
              ))
              setisLoading(false)
            }}
          >
            {
              lastRead &&
              !isClicked ?
              <View>
                {
                  !isLoading ?
                  <>
                    {
                      ( lastRead.ayat === data.ayah && lastRead.noSurah === data.surah.id ) ?
                      <IconPined width={25} height={25} />
                      :
                      <IconPin width={25} height={25} />
                    }
                  </>
                  :
                  <ActivityIndicator size={'small'}/>
                }
              </View>
              :
              <View>
                {
                  !isLoading ?
                  <IconPined width={25} height={25} />
                  :
                  <ActivityIndicator size={'small'}/>
                }
              </View>
            }
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