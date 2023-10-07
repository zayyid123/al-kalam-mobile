import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { useColorScheme } from "nativewind";
import { Picker } from '@react-native-picker/picker';
import { GetAllDataAdzan, GetAllDataKota } from '../../services/surahServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdzanPage = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [city, setcity] = useState()
  const [selectedCity, setselectedCity] = useState('ambarawa')
  const [todayAdzan, settodayAdzan] = useState()

  const selectCity = async(value) => {
    await AsyncStorage.setItem('city_adzan', JSON.stringify(value));
    setselectedCity(value)
  }

  function tampilkanTanggalDanHari() {
    const namaHari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu"
    ];
  
    const namaBulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
  
    const tanggal = new Date();
    const hari = namaHari[tanggal.getDay()]; // Mendapatkan nama hari dalam bahasa Indonesia
    const tanggalTanggal = tanggal.getDate();
    const bulan = namaBulan[tanggal.getMonth()]; // Mendapatkan nama bulan dalam bahasa Indonesia
    const tahun = tanggal.getFullYear();
  
    const output = `${hari}, ${tanggalTanggal} ${bulan} ${tahun}`;
    return output
  }

  const getAdzanToday = (dataAdzan) => {
    const getDay = () => {
      let day = new Date().getDay()+1
      if (day < 10) {
        day = '0'+day
      }
      return(day)
    }
    const nowDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${getDay()}`;
    dataAdzan.forEach((res, index) => {
      if (res.tanggal === nowDate) {
        settodayAdzan(res)
      }
    })
  }

  useEffect(() => {
    const getCityFromLocal = async() => {
      try {
        const value = await AsyncStorage.getItem('city_adzan');
        if (value !== null) {
          setselectedCity(JSON.parse(value))
        } else {
          await AsyncStorage.setItem('city_adzan', JSON.stringify('ambarawa'));
          setselectedCity('ambarawa')
        }
      } catch (error) {
        alert(error)
      }
    }

    getCityFromLocal()
  }, [])

  useEffect(() => {
    const getDataAdzan = async() => {
      const res = await GetAllDataAdzan(selectedCity, new Date().getFullYear(), new Date().getMonth()+1)
      getAdzanToday(res.data)
    }

    const getAllKota = async() => {
      const res = await GetAllDataKota()
      setcity(res.data)
    }

    getAllKota()
    getDataAdzan()
  }, [selectedCity])

  if (!city) {
    return (
      <View
        className='flex-1 justify-center items-center'
      >
        <ActivityIndicator size={'large'}/>
      </View>
    )
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
              source={require('../../assets/image/bulan.png')}
              className='w-[50px] h-[50px]'
            />
          </View>
          <Text className='text-white font-bold text-lg'>Jadwal Adzan</Text>
          <Text className='text-white w-[70%] text-center'>{tampilkanTanggalDanHari()}</Text>
        </View>
      </LinearGradient>

      {/* picker */}
      <View
        className='bg-white mx-3 rounded-lg'
      >
        {
          city &&
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) =>
              selectCity(itemValue)
            }
          >
            {
              city.map((res, index) => {
                return(
                  <Picker.Item key={'picker'+index} label={res[0].toUpperCase() + res.substring(1)} value={res} className='capitalize' />
                )
              })
            }
          </Picker>
        }
      </View>

      {/* jadwal */}
      <View
        className='mx-3 mt-3 p-3 bg-white rounded-lg items-center'
      >
        {/* title */}
        <View
          className='bg-[#0D9488] px-3 py-1 rounded-lg'
        >
          <Text className='capitalize text-white'>{selectedCity}</Text>
        </View>

        {/* list */}
        {
          todayAdzan &&
          <View className='flex justify-between w-full'>
            <View className='flex-row w-full bg-green-100 justify-between mt-2'>
              <Text className='py-2 px-2'>Subuh :</Text>
              <Text className='py-2 px-2'>{todayAdzan.shubuh}</Text>
            </View>
            <View className='flex-row w-full justify-between'>
              <Text className='py-2 px-2'>Dzuhur :</Text>
              <Text className='py-2 px-2'>{todayAdzan.dzuhur}</Text>
            </View>
            <View className='flex-row w-full bg-green-100 justify-between'>
              <Text className='py-2 px-2'>Ashr :</Text>
              <Text className='py-2 px-2'>{todayAdzan.ashr}</Text>
            </View>
            <View className='flex-row w-full justify-between'>
              <Text className='py-2 px-2'>Magrib :</Text>
              <Text className='py-2 px-2'>{todayAdzan.magrib}</Text>
            </View>
            <View className='flex-row w-full bg-green-100 justify-between'>
              <Text className='py-2 px-2'>Isya :</Text>
              <Text className='py-2 px-2'>{todayAdzan.isya}</Text>
            </View>
          </View>
        }
      </View>
    </View>
  )
}

export default AdzanPage