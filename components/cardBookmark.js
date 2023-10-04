import React from 'react'
import { router } from 'expo-router';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'

const CardBookmark = ({ id_surah, removeBookmark, dataSurah }) => {
  return (
    <View
      className='bg-white p-3 mx-3 mb-3 rounded-xl flex-row justify-between items-center'
    >
      {/* kiri */}
      <TouchableOpacity
        onPress={() => {
          router.push(`/surah/${id_surah}`)
        }}
        className='w-[70%]'
      >
        <View
          className='flex-row items-center justify-start'
        >
          {/* id surah */}
          <View className='bg-[#32B0A8] p-3 rounded-lg'>
            <Text className='text-white'>{id_surah}</Text>
          </View>

          {/* detail */}
          <View
            className='ml-3'
          >
            <Text className='font-semibold text-lg'>{dataSurah[id_surah-1].nama_latin}</Text>
            <Text>{dataSurah[id_surah+1].tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {dataSurah[id_surah-1].jumlah_ayat} ayat</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* kanan */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Hapus Bookmark ?', 'Yakin Ingin Hapus Bookmark', [
            {
              text: 'Cancel',
              onPress: () => '',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
              removeBookmark(id_surah)
            }},
          ]);
        }}
      >
        <View>
          <Image source={require('../assets/image/delete.png')} className='w-[40px] h-[40px]'/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardBookmark