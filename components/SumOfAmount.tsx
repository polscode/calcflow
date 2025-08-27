import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';



export interface SumOfAmountProps {
  index: number,
  updateDiscounts?: (index: number, arrayAmount: number[]) => void,
  arrayAmount: number[],
}

const SumOfAmount: React.FC<SumOfAmountProps> = ({ index, updateDiscounts, arrayAmount }) => {

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<TextInput>(null);
  const { width } = useWindowDimensions()
  const widthList = width - 40

  const handleAddAmount = () => {
    const amount = parseFloat(inputValue.trim());

    if (!isNaN(amount) && updateDiscounts) {
      const newArray = [...arrayAmount, amount];
      updateDiscounts(index, newArray);
      setInputValue('');
    }
  };

  const handleRemoveAmount = (amountToRemove: number, pos: number) => {
    if (updateDiscounts) {
      const newArray = arrayAmount.filter((_, i) => i !== pos); // quitamos por índice
      updateDiscounts(index, newArray);
    }
  };

  return (
    <View className="w-screen">
      <View className="flex-row justify-center items-center py-2 gap-2">
        <TextInput
          onSubmitEditing={handleAddAmount}
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
          onPress={handleAddAmount}
          className='bg-[#6555af] w-28 py-4 rounded-md'
        >
          <Text className="text-white text-center font-semibold text-xl">
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
      <ListAmounts
        amounts={arrayAmount}
        widthList={widthList}
        onRemove={handleRemoveAmount}
      />

    </View>
  );
};

interface listAmountsProps {
  amounts: number[];
  widthList: number;
  onRemove: (amount: number, pos: number) => void;
}

const ListAmounts: React.FC<listAmountsProps> = ({ amounts, widthList, onRemove }) => {
  return (
    <FlatList
      data={amounts}
      renderItem={({ item, index }) => <ItemList amount={item} onDelete={() => onRemove(item, index)} />}
      keyExtractor={(_, index) => index.toString()}
      scrollEnabled={false}
      horizontal
      contentContainerClassName='gap-2 w-100 flex-wrap py-4'
      contentContainerStyle={{ width: widthList }}
      keyboardShouldPersistTaps='handled'
    />
  )
}

interface ItemProps {
  amount: number;
  onDelete: () => void;
}

const ItemList = ({ amount, onDelete }: ItemProps) => {



  return (
    <TouchableOpacity
      onPress={onDelete}
      className="border border-[#6555af] rounded-lg  flex-row relative">
      <Text className='text-[#bfb7e0] text-lg font-medium p-2'>
        {amount}
      </Text>
      {/* {amount._x > 1 && <Text className='bg-[#6555af] text-[#bfb7e0] font-medium absolute rounded-full w-5 h-5 text-center  top-[-8] right-[-8]'>
        {amount._x}
      </Text>} */}
    </TouchableOpacity>
  );
};


interface MultProps {
  setExtractMul: (num: number) => void;
  amoutns: number[]
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
