import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonOpacityProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
}

const ButtonOpacity: React.FC<ButtonOpacityProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-[#594797] py-5 rounded-lg'
    >
      <Text className='text-white font-semibold text-center text-xl'>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonOpacity
