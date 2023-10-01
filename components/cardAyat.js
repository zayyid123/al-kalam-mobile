import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useColorScheme } from "nativewind";

// svg icon
import IconPin from '../assets/icons/pin.svg'
import IconShare from '../assets/icons/share.svg'

const CardAyat = ({ data }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  function convertToReactNativeText(inputString) {
    const reactNativeText = [];
    let currentIndex = 0;
    let keyIndex = 0;
  
    const regex = /<([^>]+)>([^<]+)<\/\1>/g;
    let match;
  
    while ((match = regex.exec(inputString)) !== null) {
      const [fullMatch, tag, content] = match;
  
      if (currentIndex < match.index) {
        const plainText = inputString.substring(currentIndex, match.index);
        reactNativeText.push(
          <Text key={`plain_${keyIndex}`} style={{color: `${colorScheme === 'dark' ? "white" : 'black'}`}} >{plainText}</Text>
        );
        keyIndex++;
      }
  
      if (tag === 'strong') {
        reactNativeText.push(
          <Text key={`strong_${keyIndex}`} style={{ fontWeight: 'bold', color: `${colorScheme === 'dark' ? "white" : 'black'}` }}>{content}</Text>
        );
      } else if (tag === 'u') {
        reactNativeText.push(
          <Text key={`underline_${keyIndex}`} style={{ textDecorationLine: 'underline', color: `${colorScheme === 'dark' ? "white" : 'black'}` }}>{content}</Text>
        );
      } else {
        // Handle other tags if needed
      }
  
      currentIndex = regex.lastIndex;
      keyIndex++;
    }
  
    if (currentIndex < inputString.length) {
      const plainText = inputString.substring(currentIndex);
      reactNativeText.push(
        <Text key={`plain_${keyIndex}`}>{plainText}</Text>
      );
    }
  
    return reactNativeText;
  }

  return (
    <View
      className='mb-4'
    >
      {/* bar */}
      <View
        className='bg-white p-1 rounded-full flex-row justify-between items-center'
      >
        {/* nomor ayat */}
        <View
          className='bg-[#32b0a8] w-[25px] h-[25px] rounded-full items-center justify-center'
        >
          <Text className='text-white'>{data.nomor}</Text>
        </View>

        {/* shared */}
        <View
          className='flex-row-reverse justify-between items-center min-w-[60px] ml-2'
        >
          {/* icon share */}
          <TouchableOpacity>
            <View>
              <IconShare width={25} height={25} />
            </View>
          </TouchableOpacity>

          {/* icon pin */}
          <TouchableOpacity>
            <View>
              <IconPin width={25} height={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* ayat */}
      <View
        className='mx-3 my-4'
      >
        <Text style={{ fontFamily: 'LPMQIsepMisbah', fontSize: 25, color: `${colorScheme === 'dark' ? '#fff' : '#166534'}` }}>{data.ar}</Text>
      </View>

      {/* translate */}
      <View>
        <View
          className='flex-row flex-wrap'
        >
          {
            convertToReactNativeText(data.tr)
          }
        </View>
      </View>

      {/* indo */}
      <View className='mt-2 mb-3'>
        <Text className={`${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>{data.idn}</Text>
      </View>
    </View>
  )
}

export default CardAyat