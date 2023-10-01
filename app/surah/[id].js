import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { GetDetailSurah } from '../../services/surahServices';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from "nativewind";

// svg
import IconBookmarkPutih from '../../assets/icons/bookmark_putih.svg'
import QuranPlayer from '../../components/quranPlayer';
import CardAyat from '../../components/cardAyat';

const DetailSurah = () => {
  const { id } = useLocalSearchParams();
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const [allDetailSurah, setallDetailSurah] = useState()

  useEffect(() => {
    const getDetailSurah = async () => {
      const res = await GetDetailSurah(id)
      setallDetailSurah(res.data)
    }

    getDetailSurah()
  }, [])

  if (!allDetailSurah) {
    return (
      <View
        className='flex-1 justify-center items-center'
      >
        <Text className={`font-bold text-lg ${colorScheme === 'dark' && 'text-white'}`}>Loading...</Text>
      </View>
    )
  }

  return (
    <View
      className='mx-3 mb-14'
    >
      {/* detail Surah */}
      <View
        className='mb-5'
      >
        <LinearGradient
          colors={[colorScheme === 'dark' ? '#19b1ae' : '#2AB2AF', colorScheme === 'dark' ? '#45fffc' : '#7DC694']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className='p-3 rounded-xl'
        >
          <View
            className='items-center'
          >
            {/* nomor surah */}
            <View
              className='justify-center items-center'
            >
              <Image
                source={require('../../assets/image/penanda-putih.png')}
                className='w-[50px] h-[50px]'
              />
              <Text
                className='text-white absolute'
              >
                {allDetailSurah.nomor}
              </Text>
            </View>

            {/* nama latin */}
            <Text
              className='font-bold text-white mt-2 text-3xl'
            >
              {allDetailSurah.nama_latin}
            </Text>

            {/* arti surat */}
            <Text
              className='text-white text-lg'
            >
              {allDetailSurah.arti}
            </Text>

            {/* jumlah ayat dan turun */}
            <Text
              className='text-white font-light mt-6'
            >
              {allDetailSurah.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {allDetailSurah.jumlah_ayat} ayat
            </Text>

            {/* bookmark */}
            <TouchableOpacity
              className='absolute right-0'
            >
              <IconBookmarkPutih width={30} height={30}/>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* quran player */}
      <QuranPlayer/>

      {/* basmalah */}
      <View
        className='my-3 items-center'
      >
        <Image
          source={require('../../assets/image/basmalah-light.png')}
          className='w-full h-[80px]'
          resizeMode="contain"
        />
      </View>

      {/* card ayat */}
      <>
        {
          allDetailSurah.ayat.map((res, index) => 
            <View key={'ayat'+index}>
              <CardAyat data={res}/>
            </View>
          )
        }
      </>
    </View>
  )
}

export default DetailSurah