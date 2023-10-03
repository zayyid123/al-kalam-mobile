import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Audio } from 'expo-av';

// svg
import NavigationPlayer from '../assets/icons/navigation-audio.svg'
import PlayQuran from '../assets/icons/play-audio.svg'

const QuranPlayer = ({ id_surah }) => {
  const [progress, setprogress] = useState(0)
  const [sound, setSound] = useState();

  console.log(id_surah)

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({uri: "https://santrikoding.com/storage/audio/114.mp3"});
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View
      className='bg-white p-3 rounded-lg flex-row justify-between items-center'
    >
      {/* bar */}
      <View className='bg-gray-700 w-[60%] h-2 my-2 rounded-lg' >
        <View className='bg-teal-600 h-2 w-0 rounded-lg' style={{ width: progress + '%' }}></View>
      </View>

      {/* player */}
      <View
        className='flex-row justify-between items-center'
      >
        {/* back */}
        <TouchableOpacity>
          <View
            className='-rotate-180 bg-[#def7f5] p-2 rounded-full'
          >
            <NavigationPlayer width={15} height={15} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound()
          }}
        >
          <View
            className='bg-[#def7f5] p-2 rounded-full mx-2 my-1'
          >
            <PlayQuran width={25} height={25}/>
          </View>
        </TouchableOpacity>

        {/* next */}
        <TouchableOpacity>
          <View
            className='bg-[#def7f5] p-2 rounded-full'
          >
            <NavigationPlayer width={15} height={15}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuranPlayer