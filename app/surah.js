import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { GetAllDataSurah } from '../services/surahServices';

const SurahPage = () => {
  const [allDataSurah, setallDataSurah] = useState();

  useEffect(() => {
    const getAllDataSurah = async() =>{
      const res = await GetAllDataSurah()
      setallDataSurah(res.data)
    }

    getAllDataSurah()
  }, [])

  return (
    <View className='mx-3'>
      {/* search */}
      <View
        className='justify-center items-center'
      >
        <Text>Search</Text>
      </View>

      {/* list surah */}
      <ScrollView
        horizontal={true} 
        style={{ width: "100%" }}
      >
        {
          allDataSurah &&
          <FlatList
            data={allDataSurah}
            renderItem={({item}) => 
              <View>
                <Text>{item.nama}</Text>
              </View>
            }
            keyExtractor={item => item.nomor}
          />
        }
      </ScrollView>
    </View>
  )
}

export default SurahPage