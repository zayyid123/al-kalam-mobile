import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from "nativewind";
import AsyncStorage from '@react-native-async-storage/async-storage';

// svg
import IconBookmarkPutih from '../../assets/icons/bookmark_putih.svg'
import IconBookmarked from '../../assets/icons/bookmarked_putih.svg'
import QuranPlayer from '../../components/quranPlayer';
import CardAyat from '../../components/cardAyat';

import detailSurahs from '../../assets/surah/detail/detail_surah';

const DetailSurah = () => {
  const { id } = useLocalSearchParams();
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const [allDetailSurah, setallDetailSurah] = useState()
  const [lastRead, setlastRead] = useState()
  const [bookmark, setbookmark] = useState()
  const [isBookmark, setisBookmark] = useState(false)

  const getDetailSurah = async (my_id) => {
    setallDetailSurah(detailSurahs[my_id-1].data.data)
  } 

  const getLastRead = async() => {
    try {
      const value = await AsyncStorage.getItem('last_read');
      if (value !== null) {
        setlastRead(JSON.parse(value))
      }
    } catch (error) {
      alert(error)
    }
  }
  
  const getBookmark = async() => {
    try {
      const value = await AsyncStorage.getItem('bookmark');
      if (value !== null) {
        const dataBookmark = JSON.parse(value)
        setbookmark(dataBookmark)
        dataBookmark.forEach((data, index) => {
          if (data === id) {
            setisBookmark(true)
          }
        })
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (id) {
      getDetailSurah(id)
    }
    getLastRead()
    getBookmark()
  }, [])
  
  const addLastRead = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      await setlastRead(JSON.parse(value))
      await setallDetailSurah()
      await getDetailSurah(id)
      Alert.alert('Terakhir Dibaca','Berhasil menambahkan ke terakhir dibaca')
    } catch (error) {
      Alert.alert('Error',error)
    }
  };

  const addBookmark = async() => {
    const data = await AsyncStorage.getItem('bookmark');
    Alert.alert('Tambah Bookmark','Berhasil menambahkan ke Bookmark')
    setisBookmark(true)
    if (data === null) {
      await AsyncStorage.setItem('bookmark', JSON.stringify([id]));
    } else {
      const dataParser = JSON.parse(data)
      const myAllData = [
        ...dataParser, id
      ]
      await AsyncStorage.setItem('bookmark', JSON.stringify(myAllData));
    }
  }

  const removeBookmark = async() => {
    const data = await AsyncStorage.getItem('bookmark');
    Alert.alert('Hapus Bookmark','Berhasil hapus Bookmark')
    setisBookmark(false)
    const dataParser = JSON.parse(data)
    dataParser.forEach((data, index) => {
      if (data === id) {
        dataParser.splice(index, 1)
        AsyncStorage.setItem('bookmark', JSON.stringify(dataParser));
      }
    })
  }

  if (!allDetailSurah) {
    return (
      <View
        className='flex-1 justify-center items-center'
      >
        <ActivityIndicator size={'large'}/>
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
                {allDetailSurah[0].surah_id}
              </Text>
            </View>

            {/* nama latin */}
            <Text
              className='font-bold text-white mt-2 text-3xl'
            >
              {allDetailSurah[0].surah.latin}
            </Text>

            {/* arti surat */}
            <Text
              className='text-white text-lg'
            >
              {allDetailSurah[0].surah.translation}
            </Text>

            {/* jumlah ayat dan turun */}
            <Text
              className='text-white font-light mt-6'
            >
              {allDetailSurah[0].surah.location} - {allDetailSurah.length} ayat
            </Text>

            {/* bookmark */}
            <TouchableOpacity
              className='absolute right-0'
              onPress={() => {
                isBookmark ? removeBookmark() : addBookmark()
              }}
            >
              {
                isBookmark ?
                <IconBookmarked width={30} height={30}/>
                :
                <IconBookmarkPutih width={30} height={30}/>
              }
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* quran player */}
      <QuranPlayer id_surah={allDetailSurah[0].surah_id}/>

      {/* basmalah */}
      <View
        className='my-3 items-center'
      >
        {
          colorScheme === 'dark' ?
          <Image
            source={require('../../assets/image/basmalah-dark.png')}
            className='w-full h-[80px]'
            resizeMode="contain"
          />
          :
          <Image
            source={require('../../assets/image/basmalah-light.png')}
            className='w-full h-[80px]'
            resizeMode="contain"
          />
        }
      </View>

      {/* card ayat */}
      {
        allDetailSurah.length &&
        <FlatList
          data={allDetailSurah}
          scrollEnabled={false}
          renderItem={({item}) => {
            return(
              <CardAyat data={item} storeData={addLastRead} lastRead={lastRead} setlastRead={setlastRead}/>
            )
          }}
          keyExtractor={item => item.id}
        />
      }
    </View>
  )
}

export default DetailSurah