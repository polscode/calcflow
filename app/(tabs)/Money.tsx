import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Money = () => {
  const inset = useSafeAreaInsets()

  return (
    <View style={{marginTop: inset.top}}>
      <Text className="text-blue-500">
        hola desde la Dinero
      </Text>
    </View>
  )
}

export default Money
