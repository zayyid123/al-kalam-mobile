import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
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
      <View
        className='mt-3 mb-20'
      >
        {
          allDataSurah &&
          allDataSurah.map((res, index) =>
            <View 
              key={'item'+index}
              className='mb-6'
            >
              <TouchableOpacity
                className='mb-1 flex-row justify-between items-center'
              >
                {/* detail */}
                <View
                  className='flex-row justify-between items-center'
                >
                  {/* nomor */}
                  <View
                    className='justify-center items-center'
                  >
                    <Image
                      source={require('../assets/image/penanda-hijau.png')}
                      className='w-[34px] h-[34px]'
                    />
                    <Text
                      className='absolute text-xs'
                    >
                      {res.nomor}
                    </Text>
                  </View>

                  <View
                    className='ml-3'
                  >
                    <Text className='font-bold text-base'>{res.nama_latin}</Text>
                    <Text className='font-thin text-sm'>{res.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {res.jumlah_ayat} Ayat</Text>
                  </View>
                </View>

                {/* nama arab */}
                <View
                  className='justify-center'
                >
                  <Text className='font-bold text-xl text-[#166534]'>{res.nama}</Text>
                </View>
              </TouchableOpacity>
              <View style={{flex: 1, height: 0.5, backgroundColor: 'gray'}} />
            </View>
          )
        }
      </View>
    </View>
  )
}

export default SurahPage