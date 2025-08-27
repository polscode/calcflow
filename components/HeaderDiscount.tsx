import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export interface HeaderDiscountProps {
  title: string,
  icon: string,
  number: number,
  onPress?: () => void,
  style?: string,
}


const iconMap: Record<string, any> = {
  anulado: require('../assets/images/anulado.png'),
  descuento: require('../assets/images/descuento.png'),
  credito: require('../assets/images/credito.png'),
  transferencia: require('../assets/images/transferencia.png'),
  efectivo: require('../assets/images/efectivo.png'),
  parqueo: require('../assets/images/parqueo.png'),
  otros: require('../assets/images/otros.png'),
};

const HeaderDiscount: React.FC<HeaderDiscountProps> = ({ icon, title, number, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`bg-[#303030] p-2 rounded-xl flex-row items-center justify-between ${style}`} style={{ backgroundColor: '#202020' }}>
        <View className="gap-3 flex-row items-center p-2">
          <LinearGradient
            style={{ borderRadius: 5 }}
            colors={['#8f7fd6', '#6555af']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='p-2'
          >
            <Image
              source={iconMap[icon]}
              style={{ width: 35, height: 35 }}
            />
          </LinearGradient>
          <Text className="text-xl text-white font-semibold">
            {title}
          </Text>
        </View>
        <Text className="text-white text-xl text-right bg-[#171717] p-4 rounded-md font-semibold w-36">
          {number.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default HeaderDiscount
