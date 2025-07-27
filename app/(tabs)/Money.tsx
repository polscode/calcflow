import MultiplyMoney from "@/components/MultiplyMoney"
import TemplateScreen from "@/components/TemplateScreen"
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native"

const Money = () => {


  return (
    <TemplateScreen>
      <View className="justify-center gap-2">
        <View className="flex-row items-center gap-2 justify-center pt-6">
          <Image
            source={require('../../assets/images/get-cash.png')}
            style={{ height: 35, width: 35 }}
          />
          <Text className="text-xl text-[#bfb7e0]">Dinero en Físico</Text>
        </View>
        <Text className="text-white text-4xl text-center font-semibold py-4">13520.15 $</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'height'}
        keyboardVerticalOffset={20}
        className="bg-primary pt-4 rounded-tl-3xl rounded-tr-3xl pb-5"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, }}
          contentContainerClassName='p-4'
        >

          <View className="flex-row items-center gap-2 my-2">
            <Image
              source={require('../../assets/images/stack-money.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text className="text-[#bfb7e0] text-xl font-semibold">
              Billetes
            </Text>
          </View>

          <View className="gap-2">
            <MultiplyMoney denomination={200} />
            <MultiplyMoney denomination={100} />
            <MultiplyMoney denomination={50} />
            <MultiplyMoney denomination={20} />
            <MultiplyMoney denomination={10} />
          </View>

          <View className="flex-row items-center gap-2 my-2">
            <Image
              source={require('../../assets/images/coin-3d.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text className="text-[#bfb7e0] text-xl font-semibold">
              Monedas
            </Text>
          </View>

          <View className="gap-2">
            <MultiplyMoney denomination={5} />
            <MultiplyMoney denomination={2} />
            <MultiplyMoney denomination={1} />
            <MultiplyMoney denomination={0.20} />
            <MultiplyMoney denomination={0.10} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </TemplateScreen>
  )
}

export default Money
