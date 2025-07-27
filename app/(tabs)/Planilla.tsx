import TemplateScreen from '@/components/TemplateScreen';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Planilla = () => {
  return (
    <TemplateScreen>
      <View
          style={{ height: '20%' }}
          className='bg-primary-dark justify-center gap-2 '
        >
          <View className='flex-row items-center gap-2 justify-center'>
            <Image
              source={require('../../assets/images/total-dollar.png')}
              style={{ height: 35, width: 35 }}
            />
            <Text
              className='text-xl text-[#bfb7e0]'
            >
              Total de dinero en planilla
            </Text>
          </View>
          <Text className='text-white text-4xl text-center font-semibold'>
            13520.15 $
          </Text>
        </View>
        <View
          style={{ height: '80%' }}
          className='bg-[#171717] rounded-t-3xl px-8 gap-10 pt-16'
        >
          <View className='flex-row bg-[#303030] rounded-lg py-2'>
            <Image
              source={require('../../assets/images/dollar-coin.png')}
              className='ml-4'
            />
            <TextInput
              className=' pl-4 text-xl text-white'
              placeholder='Ingrese el total de planilla'
              placeholderTextColor='#888'
              keyboardType='number-pad'
            />
          </View>
          <TouchableOpacity
            className='bg-[#594797] py-2 rounded-lg flex-row justify-center items-center'
          >
            <Image
              source={require('../../assets/images/transaction.png')}
              style={{tintColor: '#bfb7e0'}}
            />
            <Text className='text-[#bfb7e0] text-center text-xl font-semibold p-2'>
              Actualizar
            </Text>
          </TouchableOpacity>

        </View>
    </TemplateScreen>
  )
}

export default Planilla
