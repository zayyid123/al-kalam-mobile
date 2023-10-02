import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as Font from 'expo-font';
import { useColorScheme } from 'nativewind';
import { router } from 'expo-router';

// SVG
import IconSearch from '../../assets/icons/img_icon_search.svg'

// all surah
import AllDataSurahJson from '../../assets/surah/all_surah.json'

const SurahPage = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [allDataSurah, setallDataSurah] = useState(AllDataSurahJson);
  const [searchValue, setsearchValue] = useState('')
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'LPMQIsepMisbah': require('../../assets/fonts/LPMQIsepMisbah.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View
        className='flex-1 justify-center items-center'
      >
        <Text className={`font-bold text-lg ${colorScheme === 'dark' && 'text-white'}`}>Loading...</Text>
      </View>
    )
  }

  return (
    <View className='mx-3'>
      {/* search */}
      <View
        className='mb-7 mt-1 items-center'
      >
        <View
          className={`flex-row px-3 justify-between items-center ${colorScheme === 'dark' ? 'bg-[#32383d]' : 'bg-[#cbeef7]'} w-[70%] rounded-xl`}
        >
          <TextInput
            className={`h-[50px] w-[70%] ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}
            placeholder="Search"
            placeholderTextColor={colorScheme === 'dark' ? '#fff' : 'black'}
            onChangeText={newText => setsearchValue(newText)}
            defaultValue={searchValue}
          />
          <IconSearch/>
        </View>
      </View>

      {/* list surah */}
      <View
        className='mt-2 mb-20'
      >
        <FlatList
          data={allDataSurah.filter((data) => data.nama_latin.toLowerCase().includes(searchValue.toLowerCase()))}
          scrollEnabled={false}
          renderItem={({item}) => {
            return(
              <View 
                className='mb-6'
              >
                <TouchableOpacity
                  className='mb-1 flex-row justify-between items-center'
                  onPress={() => {
                    router.push(`/surah/${item.nomor}`)
                  }}
                >
                  
                  <View
                    className='flex-row justify-between items-center'
                  >
                    
                    <View
                      className='justify-center items-center'
                    >
                      {
                        colorScheme === 'dark' ?
                        <Image
                          source={require('../../assets/image/penanda-putih.png')}
                          className='w-[34px] h-[34px]'
                        />
                        :
                        <Image
                          source={require('../../assets/image/penanda-hijau.png')}
                          className='w-[34px] h-[34px]'
                        />
                      }
                      <Text
                        className={`absolute text-xs ${colorScheme === 'dark' && 'text-white'}`}
                      >
                        {item.nomor}
                      </Text>
                    </View>

                    <View
                      className='ml-3'
                    >
                      <Text className={`font-bold text-base ${colorScheme === 'dark' && 'text-white'}`}>{item.nama_latin}</Text>
                      <Text className={`font-thin text-sm ${colorScheme === 'dark' && 'text-[#32B0A8]'}`}>{item.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {item.jumlah_ayat} Ayat</Text>
                    </View>
                  </View>

                  
                  <View
                    className='justify-center'
                  >
                    <Text style={{ fontFamily: 'LPMQIsepMisbah', fontSize: 20, color: `${colorScheme === 'dark' ? '#fff' : '#166534'}` }}>{item.nama}</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ height: 0.5, backgroundColor: 'gray'}} />
              </View>
            )
          }}
          keyExtractor={item => item.nomor}
        />
      </View>
    </View>
  )
}

export default SurahPage