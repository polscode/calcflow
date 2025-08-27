import TemplateScreen from '@/components/TemplateScreen';
import { useReportStore } from '@/stores/report.store';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Planilla = () => {

  const [inputTotal, setInputTotal] = useState('')
  const totalPlanilla = useReportStore( state => state.report.totalPlanilla);
  const updateTotalPlanilla = useReportStore(state => state.updateTotalPlanilla)

  const handleInput = () => {
    const num = Number(inputTotal)

    if (!inputTotal.trim()) return;

    if (!isNaN(num)) {
      const totalFixed = parseFloat(num.toFixed(2))
      updateTotalPlanilla(totalFixed)
      setInputTotal('')
    }
  }

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
            {totalPlanilla.toFixed(2)}
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
              value={inputTotal}
              onChangeText={setInputTotal}
              className=' pl-4 text-xl text-white flex-1'
              placeholder='Ingrese el total de planilla'
              placeholderTextColor='#888'
              keyboardType='numeric'
              returnKeyType='done'
              onSubmitEditing={handleInput}
            />
          </View>
          <TouchableOpacity
            className='bg-[#594797] py-2 rounded-lg flex-row justify-center items-center'
            onPress={handleInput}
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
