import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Page() {
  return (
    <View className='mb-20'>
      {/* logo quran */}
      <View className='justify-center items-center'>
        <Image 
          source={require('../assets/image/quran.png')} 
          className='w-[110px] h-[80px]'
        />
      </View>

      {/* last read */}
      <TouchableOpacity>
        <LinearGradient
          colors={['#19b1ae', '#45fffc']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className='p-3 mx-3 rounded-xl'
        >
          <View className='flex-row justify-between items-center'>
            <View>
              <Text className='text-white mb-3 font-light'>Last Read</Text>

              {/* ayat */}
              <Text className='text-white font-semibold text-base'>Al-Fatihah</Text>
              <Text className='text-white font-light'>Ayat - No. 1</Text>
              <Text className='text-white font-light'>Baca {'>'}</Text>
            </View>

            <Image 
              source={require('../assets/image/last-read.png')}
              className='w-[110px] h-[80px]'
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* menu view */}
      <View>
        <View className='flex-row justify-between items-start mt-3'>
          {/* Quran */}
          <TouchableOpacity className='w-[50%]'>
            <LinearGradient
              colors={['#5d1e90', '#892fd9']}
              className='p-3 ml-3 mr-1 rounded-xl'
            >
              <View className='items-start justify-start'>
                <Image
                  source={require('../assets/image/quran2.png')}
                  className='w-[70px] h-[70px]'
                  resizeMode="contain"
                />
                <Text
                  className='mt-10 ml-2 text-white font-semibold text-base'
                >
                  Quran
                </Text>
                <Text
                  className='text-white font-light ml-2 mb-2'
                >
                  Baca {'>'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Adzan */}
          <TouchableOpacity className='w-[50%]'>
            <LinearGradient
              colors={['#065a43', '#058a61']}
              className='p-3 mr-3 ml-1 rounded-xl'
            >
              <View className='items-start justify-start'>
                <Image
                  source={require('../assets/image/bulan.png')}
                  className='w-[70px] h-[70px]'
                  resizeMode="contain"
                />
                <Text
                  className='mt-2 ml-2 text-white font-semibold text-base'
                >
                  Adzan
                </Text>
                <Text
                  className='text-white font-light ml-2 mb-2'
                >
                  Lihat {'>'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-between items-start mt-3 pb-5'>
          {/* Doa */}
          <TouchableOpacity className='w-[50%]'>
            <LinearGradient
              colors={['#065a43', '#058a61']}
              className='p-3 ml-3 mr-1 rounded-xl'
            >
              <View className='items-start justify-start'>
                <Image
                  source={require('../assets/image/quran3.png')}
                  className='w-[70px] h-[70px]'
                  resizeMode="contain"
                />
                <Text
                  className='mt-2 ml-2 text-white font-semibold text-base'
                >
                  Doa
                </Text>
                <Text
                  className='text-white font-light ml-2 mb-2'
                >
                  Lihat {'>'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          
          {/* Bookmark */}
          <TouchableOpacity 
            className='w-[50%] absolute right-0 top-[-30px]'
            onPress={() => {
              router.replace('/bookmark');
            }}
          >
            <LinearGradient
              colors={['#5d1e90', '#892fd9']}
              className='p-3 mr-3 ml-1 rounded-xl'
            >
              <View className='items-start justify-start'>
                <Image
                  source={require('../assets/image/bookmark-quran.png')}
                  className='w-[70px] h-[70px]'
                  resizeMode="contain"
                />
                <Text
                  className='mt-10 ml-2 text-white font-semibold text-base'
                >
                  Bookmark
                </Text>
                <Text
                  className='text-white font-light ml-2 mb-2'
                >
                  Lihat {'>'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
