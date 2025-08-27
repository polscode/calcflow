import MultiplyMoney from "@/components/MultiplyMoney";
import TemplateScreen from "@/components/TemplateScreen";
import { useReportStore } from "@/stores/report.store";
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

const Cash = () => {

  // const monies = useReportStore(state => state.monies);
  // const updatedMonies = useReportStore(state => state.updateMony);
  const cashUnits = useReportStore(state => state.report.cash);
  const updateCashQuantity = useReportStore(state => state.updateCashQuantity);
  const getTotalCash = useReportStore(state => state.getTotalCash);
  const getTotalBills = useReportStore(state => state.getTotalBills);
  const getTotalCoins = useReportStore(state => state.getTotalCoins);

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
        <Text className="text-white text-4xl text-center font-semibold py-4">{getTotalCash().toFixed(2)}</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'height'}
        keyboardVerticalOffset={20}
        className="bg-primary rounded-tl-3xl rounded-tr-3xl pb-5"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, }}
          contentContainerClassName='px-8 pt-6'
        >

          <View className="gap-2">
            {cashUnits.slice(0, 5).map((_, index) => (
              <MultiplyMoney
                key={index}
                cash={cashUnits[index]}
              />
            ))}
          </View>

          <View className="flex-row justify-between my-2 border-2 border-primary-light rounded-xl p-2 items-center">
            <View className="flex-row gap-2 items-center">
              <Image
                source={require('../../assets/images/stack-money.png')}
                style={{ width: 30, height: 30 }}
              />
              <Text className="text-[#bfb7e0] text-xl font-semibold">
                Billetes
              </Text>
            </View>
            <Text className="text-white font-semibold text-2xl">{getTotalBills().toFixed(2)}</Text>
          </View>

          <View className="gap-2">
            {cashUnits.slice(5).map((_, index) => (
              <MultiplyMoney
                key={index}
                cash={cashUnits[index + 5]}
              />
            ))}
          </View>

          <View className="flex-row justify-between my-2 border-2 border-primary-light rounded-xl p-2 items-center">
            <View className="flex-row gap-2 items-center">
              <Image
                source={require('../../assets/images/coin-3d.png')}
                style={{ width: 30, height: 30 }}
              />
              <Text className="text-[#bfb7e0] text-xl font-semibold">
                Monedas
              </Text>
            </View>
            <Text className="text-white font-semibold text-2xl">{getTotalCoins().toFixed(2)}</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </TemplateScreen>
  )
}

export default Cash
