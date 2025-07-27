import { Image, KeyboardTypeOptions, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  icon?: string | any;
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions,
  secureTextEntry: boolean
}

const Input: React.FC<InputProps> = ({icon, value, placeholder, onChangeText, keyboardType, secureTextEntry}) => {

  const source =  icon;

  return (
    <View className='flex-row rounded-lg bg-primary-dark px-3 items-center'>
      <Image
        source={source}
        className='w-8 h-8'
      />
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#888'
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className='text-white text-lg flex-1'
        secureTextEntry= {secureTextEntry}
      />
      
    </View>
  )
}


export default Input
