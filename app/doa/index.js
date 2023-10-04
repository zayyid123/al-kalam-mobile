import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, View } from 'react-native'
import { useColorScheme } from "nativewind";
import * as Font from 'expo-font';

// db doa
import Db_doa from '../../assets/doa/db_doa.json'

// components
import CardDoa from '../../components/cardDoa';

// SVG
import IconSearch from '../../assets/icons/img_icon_search.svg'

const DoaPage = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [allDataDua, setallDataDua] = useState(Db_doa)
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
    <View
      className='mx-3'
    >
      {/* detail */}
      <LinearGradient
        colors={[colorScheme === 'dark' ? '#19b1ae' : '#2AB2AF', colorScheme === 'dark' ? '#45fffc' : '#7DC694']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className='p-3 rounded-xl mb-3'
      >
        <View
          className='justify-center items-center'
        >
          <View
            className='p-1 bg-white rounded-lg mb-2'
          >
            <Image
              source={require('../../assets/image/quran3.png')}
              className='w-[50px] h-[50px]'
            />
          </View>
          <Text className='text-white font-bold text-lg'>Doa</Text>
          <Text className='text-white w-[70%] text-center'>Hidup lebih terarah dengan berdoa</Text>
        </View>
      </LinearGradient>

      {/* search */}
      <View
        className='mb-7 mt-1 items-center'
      >
        <View
          className={`flex-row px-3 justify-between items-center ${colorScheme === 'dark' ? 'bg-[#32383d]' : 'bg-[#cbeef7]'} w-[70%] rounded-xl`}
        >
          <TextInput
            className={`h-[50px] w-[70%] ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}
            placeholder="Search Du'a"
            placeholderTextColor={colorScheme === 'dark' ? '#fff' : 'black'}
            onChangeText={newText => setsearchValue(newText)}
            defaultValue={searchValue}
          />
          <IconSearch/>
        </View>
      </View>

      {/* card doa */}
      <View
        className='mb-20'
      >
        {
          allDataDua.length &&
          <FlatList
            data={allDataDua.filter((dataItem) => dataItem.doa.toLowerCase().includes(searchValue.toLowerCase()))}
            scrollEnabled={false}
            renderItem={({item}) => {
              return(
                <CardDoa data={item}/>
              )
            }}
            keyExtractor={item => item.id}
          />
        }
      </View>
    </View>
  )
}

export default DoaPage