import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

interface MultiplyMoneyProps {
  denomination: number;
}


const MultiplyMoney: React.FC<MultiplyMoneyProps> = ({ denomination }) => {

  const [inputValue, setInputValue] = useState('')
  const [total, setTotal] = useState(0)


  const multiply = () => {
    if (inputValue === '') {
      setTotal(0)
    } else {
      setTotal(denomination * parseFloat(inputValue))
    }
  }

  useEffect(() => {
    multiply()
  }, [inputValue])


  return (
    <View className='flex-row justify-between items-center'>
      <LinearGradient
        style={{ borderRadius: 5 }}
        colors={['#8f7fd6', '#6555af']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className='p-2 flex-row items-center w-20 justify-between'
      >
        <Image
          source={require('../assets/images/dollar.png')}
          style={{ width: 20, height: 20 }}
        />
        <Text className='text-xl text-white font-semibold text-right flex-1'>
          {denomination}
        </Text>
      </LinearGradient>
      <Image
        source={require('../assets/images/x-1.png')}
        style={{ width: 25, height: 25 }}
      />
      <TextInput
        onChangeText={setInputValue}
        value={inputValue}
        keyboardType='numeric'
        className='border-2 border-[#383838] p-2 text-xl rounded-lg text-white w-1/4 text-center'
      />
      <Image
        source={require('../assets/images/sort-rigth.png')}
        style={{ width: 30, height: 30 }}
      />

      <LinearGradient
        style={{ borderRadius: 5 , alignItems: 'center', justifyContent: 'center', height: 40}}
        colors={['#353535', '#555']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className='w-1/3'
      >

        <Text className='text-white text-xl text-right  rounded-lg'>
          {total}
        </Text>
      </LinearGradient>
    </View>
  )
}

export default MultiplyMoney
