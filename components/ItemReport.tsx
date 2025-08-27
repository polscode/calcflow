import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";

interface ItemReportProps {
  source: any;
  text: string;
  amount: number;
}

const ItemReport: React.FC<ItemReportProps> = ({ source, text, amount }) => {
  return (
    <LinearGradient
      style={{ borderRadius: 15 }}
      colors={['#111111', '#151515']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className='p-7 flex-row'
    >
      <View
      style={{backgroundColor: 'rgba(89, 71, 151,0.4)'}}
        className="p-2 rounded-md"
      >

        <Image
          source={source}
          style={{ width: 50, height: 50 }}
        />
      </View>

      <View className="gap-2 flex-1">
        <Text className="text-secundary text-center">{text}</Text>
        <Text className="text-white text-3xl text-center font-semibold">{amount.toFixed(2)}</Text>
      </View>
    </LinearGradient>
  )
}

export default ItemReport
