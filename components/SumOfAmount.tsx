import React, { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import Checkbox from './CheckBox';
import HeaderDiscount, { HeaderDiscountProps } from './HeaderDiscount';

const SumOfAmount: React.FC<HeaderDiscountProps> = ({ icon, title, number }) => {

  type AmoutState = {
    num: number,
    _x: number
  }

  const [amounts, setAmounts] = useState<AmoutState[]>([{ num: 10.2, _x: 4 }, { num: 105.2, _x: 1 }, { num: 1045.2, _x: 2 }, { num: 1.2, _x: 1 }, { num: 105.24, _x: 3 }]);
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(false);
  const [extractMul, setExtractMul] = useState<number>(1)

  const inputRef = useRef<TextInput>(null);
  const { width, height } = useWindowDimensions()
  const widthList = width - 40

  const addAmount = () => {
    if (inputValue === '') return;
    setAmounts(prev => [...prev, { num: parseFloat(inputValue) * extractMul, _x: extractMul }]);
    setInputValue('');
  }

  const showModal = () => {
    setModal(true)
  }

  const closedModal = () => {
    setModal(false)
  }

  return (
    <View className="w-screen">
      <View className="flex-row justify-center items-center py-2 gap-2">
        <TextInput
          onSubmitEditing={addAmount}
          ref={inputRef}
          value={inputValue}
          onChangeText={setInputValue}
          className="text-white bg-[#242424] rounded-md w-1/2 text-xl font-semibold py-4 px-5 text-center"
          placeholder="Monto"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          submitBehavior={'submit'}
        />
        <TouchableOpacity
          onPress={addAmount}
          className='bg-[#6555af] w-28 py-4 rounded-md'
        >
          <Text className="text-white text-center font-semibold text-xl">
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
      <ListAmounts amounts={amounts} widthList={widthList} />

      {/* <---- Modal ----> */}

      <Modal animationType='slide' transparent visible={modal}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <View className='flex-1 justify-center' style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>

            <TouchableWithoutFeedback onPress={closedModal}>
              <View className='absolute top-0 left-0 right-0 bottom-0' />
            </TouchableWithoutFeedback>

            <View className='h-[60%] overflow-hidden p-4 rounded-lg bg-[#171717]'>
              <HeaderDiscount title={title} icon={icon} number={5350} />
              <View className='flex-row p-4'>
                <TextInput
                  onSubmitEditing={addAmount}
                  ref={inputRef}
                  value={inputValue}
                  onChangeText={setInputValue}
                  className="text-white bg-[#242424] rounded-md w-1/2 text-xl font-semibold py-4 px-5 text-center"
                  placeholder="Monto"
                  placeholderTextColor="#9ca3af"
                  keyboardType="numeric"
                  submitBehavior={'submit'}
                />
                <TouchableOpacity

                  onPress={addAmount}
                  className='bg-[#6555af] w-1/2 py-4 rounded-md'
                >
                  <Text className="text-white text-center font-semibold text-xl">
                    Agregar
                  </Text>
                </TouchableOpacity>
              </View>
              <Mult setExtractMul={setExtractMul} amoutns={amounts} />
              <Checkbox />
              <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <ListAmounts amounts={amounts} widthList={widthList} />
              </ScrollView>
            </View>



          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

type AmoutState = {
  num: number,
  _x: number
}

interface listAmountsProps {
  amounts: AmoutState[];
  widthList: number;
}

const ListAmounts: React.FC<listAmountsProps> = ({ amounts, widthList }) => {
  return (
    <FlatList
      data={amounts}
      renderItem={({ item }) => <ItemList amount={item} />}
      keyExtractor={(_, index) => index.toString()}
      scrollEnabled={false}
      horizontal
      contentContainerClassName='gap-2 w-100 flex-wrap py-4'
      contentContainerStyle={{ width: widthList }}
    />
  )
}

interface ItemProps {
  amount: AmoutState;
}

const ItemList = ({ amount }: ItemProps) => {
  return (
    <View className="border border-[#6555af] rounded-lg  flex-row relative">
      <Text className='text-[#bfb7e0] text-lg font-medium p-2'>
        {amount.num}
      </Text>
      {amount._x > 1 && <Text className='bg-[#6555af] text-[#bfb7e0] font-medium absolute rounded-full w-5 h-5 text-center  top-[-8] right-[-8]'>
        {amount._x}
      </Text>}
    </View>
  );
};


interface MultProps {
  setExtractMul: (num: number) => void;
  amoutns: AmoutState[]
}

const Mult: React.FC<MultProps> = ({ setExtractMul, amoutns }) => {

  const [multiplier, setMultiplier] = useState(1)

  const increment = () => {
    const newValue = multiplier + 1;
    setMultiplier(newValue);
    setExtractMul(newValue);
  };

  const decrement = () => {
    if (multiplier > 1) {
      const newValue = multiplier - 1;
      setMultiplier(newValue);
      setExtractMul(newValue);
    }
  };

  useEffect(() => {
    setMultiplier(1)
    setExtractMul(1)
  }, [amoutns])

  return (

    <View className='flex-row gap-2'>
      <TouchableOpacity
        className='w-14 h-14 bg-green-500 rounded-lg justify-center items-center'
        onPress={decrement}
      >
        <Text className='text-white font-bold text-4xl'>
          -
        </Text>
      </TouchableOpacity>
      <View className='justify-center items-center w-14 h-14 bg-black'>
        <Text className='text-white  font-bold text-2xl' >
          {multiplier}
        </Text>
      </View>
      <TouchableOpacity
        className='w-14 h-14 bg-green-500 rounded-lg justify-center items-center'
        onPress={increment}
      >
        <Text className='text-white font-bold text-4xl'>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}


export default SumOfAmount;
