import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native'

const DetailSurah = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>DetailSurah {id}</Text>
    </View>
  )
}

export default DetailSurah