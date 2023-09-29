import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Page() {
  return (
    <View>
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
          className='p-3 mx-3 rounded-lg'
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
    </View>
  );
}
