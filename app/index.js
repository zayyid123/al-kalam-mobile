import { Image, SafeAreaView, Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      {/* logo quran */}
      <View className='justify-center items-center'>
        <Image 
          source={require('../assets/image/quran.png')} 
          className='w-[110px] h-[80px] '
        />
      </View>

      {/* last read */}
      <View className='bg-gradient-to-r from-[#19b1ae] to-[#45fffc] p-2 mx-3 rounded-lg'>
        <Text>Hello</Text>
      </View>
    </View>
  );
}
