import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { Audio } from 'expo-av';

// svg
import NavigationPlayer from '../assets/icons/navigation-audio.svg'
import PlayQuran from '../assets/icons/play-audio.svg'
import PauseQuran from '../assets/icons/pause-audio.svg'

const QuranPlayer = ({ id_surah }) => {
  const [progress, setprogress] = useState(0)
  const [stateStatus, setstateStatus] = useState()
  const [isLoading, setisLoading] = useState(false)
  const [isPlay, setisPlay] = useState(false)
  const [sound, setSound] = useState();

  const convertToThreeLength = (id) => {
    // Konversi id ke dalam bentuk string
    let idStr = id.toString();
    
    // Cek panjang string
    if (idStr.length < 3) {
      // Tambahkan nol di depan hingga panjang string menjadi tiga
      while (idStr.length < 3) {
        idStr = '0' + idStr;
      }
    }
    
    return idStr;
  }

  async function playSound() {
    setisLoading(true)
    sound.playAsync();
    setisLoading(false)
  }

  async function pauseSound() {
    setisLoading(true)
    sound.pauseAsync();
    setisLoading(false)
  }

  useEffect(() => {
    const loadAudio = async() => {
      setisLoading(true)
      const { sound } = await Audio.Sound.createAsync({uri: `https://santrikoding.com/storage/audio/${convertToThreeLength(id_surah)}.mp3`}, 
      {
        shouldplay: false,
        islooping: true,
      },
        onplaybackstatusupdate 
      );
      setSound(sound);
      setisLoading(false)
    }

    loadAudio()
  }, [])

  const hanldeResetAudio = () => {
    sound.setPositionAsync(0)
  }

  const handleNextAudio = () => {
    if (stateStatus.durationMillis > stateStatus.positionMillis) {
      sound.setPositionAsync(stateStatus.positionMillis + 1000)
    }
  }

  const handlePreftAudio = () => {
    if (stateStatus.positionMillis > 1000) {
      sound.setPositionAsync(stateStatus.positionMillis - 1000)
    }
  }

  const updateProgress = (duration, currentTime) => {
    const progressPercent = (currentTime / duration) * 100
    setprogress(progressPercent)
  }
  
  onplaybackstatusupdate = async (playbackstatus) => {
    setstateStatus({ ...playbackstatus })
    setisPlay(playbackstatus.isPlaying)
    updateProgress(playbackstatus.durationMillis, playbackstatus.positionMillis)
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.stopAsync();
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
        <TouchableOpacity
          onPress={() => {
            handlePreftAudio()
          }}
        >
          <View
            className='-rotate-180 bg-[#def7f5] p-2 rounded-full'
          >
            <NavigationPlayer width={15} height={15} />
          </View>
        </TouchableOpacity>

        {
          !isLoading ?
          <View>
            {
              !isPlay ?
                stateStatus && stateStatus.didJustFinish ?
                  <TouchableOpacity
                    onPress={() => {
                      hanldeResetAudio()
                    }}
                  >
                    <View
                      className='bg-[#def7f5] p-2 rounded-full mx-2 my-1'
                    >
                      <View className='bg-black w-[20px] h-[20px] m-[2.5px]'></View>
                    </View>
                  </TouchableOpacity>
                :
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
              :
              <TouchableOpacity
                onPress={() => {
                  pauseSound()
                }}
              >
                <View
                  className='bg-[#def7f5] p-2 rounded-full mx-2 my-1'
                >
                  <PauseQuran width={25} height={25}/>
                </View>
              </TouchableOpacity>
            }
          </View>
          :
          <View
            className='p-2 rounded-full mx-2 my-2'
          >
            <ActivityIndicator size="small" />
          </View>
        }

        {/* next */}
        <TouchableOpacity
          onPress={() => {
            handleNextAudio()
          }}
        >
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