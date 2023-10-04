import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { useColorScheme } from "nativewind";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardBookmark from '../components/cardBookmark';

// db surah
import DbDataSurahJson from '../assets/surah/all_surah.json'

const Bookmark = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [allDataBookmark, setallDataBookmark] = useState()
  const [allDataSurah, setallDataSurah] = useState(DbDataSurahJson)

  const getBookmark = async() => {
    try {
      const value = await AsyncStorage.getItem('bookmark');
      if (value !== null) {
        const dataBookmark = JSON.parse(value)
        setallDataBookmark(dataBookmark)
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getBookmark()
  }, [])

  const removeBookmark = async(id) => {
    const data = await AsyncStorage.getItem('bookmark');
    const dataParser = JSON.parse(data)
    dataParser.forEach((data, index) => {
      if (data === id) {
        dataParser.splice(index, 1)
        AsyncStorage.setItem('bookmark', JSON.stringify(dataParser));
      }
    })
    await setallDataBookmark()
    await getBookmark()
    Alert.alert('Hapus Bookmark','Berhasil hapus Bookmark')
  }

  return (
    <View>
      <LinearGradient
        colors={[colorScheme === 'dark' ? '#19b1ae' : '#2AB2AF', colorScheme === 'dark' ? '#45fffc' : '#7DC694']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className='p-3 mx-3 rounded-xl mb-3'
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
      {
        allDataBookmark ?
        <View>
          {
            allDataBookmark.map((res, index) => {
              return(
                <View key={'bookmark'+index}>
                  <CardBookmark id_surah={res} removeBookmark={removeBookmark} dataSurah={allDataSurah}/>
                </View>
              )
            })
          }
        </View>
        :
        <View
          className='bg-white p-3 mx-3 my-3 rounded-xl'
        >
          <Text className='text-center'>Data Kosong</Text>
        </View>
      }
    </View>
  )
}

export default Bookmark