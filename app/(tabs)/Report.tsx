import ItemReport from "@/components/ItemReport"
import TemplateScreen from "@/components/TemplateScreen"
import { useReportStore } from "@/stores/report.store"
import { Image, Text, View } from "react-native"

const Report = () => {

  const getTotalPlanilla = useReportStore(state => state.getTotalPlanilla)
  const totalDiscount = useReportStore(state => state.getTotalDiscount)
  const totalCash = useReportStore(state => state.getTotalCash)
  const getDifference = useReportStore(state => state.getDifference)

  return (
    <TemplateScreen>
      <Text className='text-3xl text-white text-center p-4 font-semibold'>
        Rerporte
      </Text>
      <View className="flex-1 m-4 gap-3">
        <ItemReport source={require('../../assets/images/total-dollar.png')} text="Total de dinero en planilla" amount={Number(getTotalPlanilla().toFixed(2))} />
        <ItemReport source={require('../../assets/images/dollar-subtract.png')} text="Descuentos de planilla" amount={Number(totalDiscount().toFixed(2))} />
        <ItemReport source={require('../../assets/images/get-cash.png')} text="Dinero en Fisico" amount={Number(totalCash().toFixed(2))} />
        <View className='p-7 flex-row rounded-xl bg-[#151515]'>
          <View
            style={{ backgroundColor: getDifference() >= 0 ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.4)' }}
            className="p-2 rounded-md"
          >
            <Image
              source={
                getDifference() >= 0
                  ? require('../../assets/images/arrow_top.png')
                  : require('../../assets/images/arrow_down.png')
              }
              style={{
                width: 50, height: 50, tintColor: getDifference() >= 0
                  ? 'rgb(0,255,0)'
                  : 'red'
              }}
            />
          </View>
          <View className="gap-2 flex-1">
            <Text
              className={`text-center text-lg font-semibold ${getDifference() >= 0
                ? "text-[#00ff00]"
                : "text-[#ff0000]"
                }`}
            >
              {getDifference() > 0
                ? "Dinero excedente"
                : getDifference() < 0
                  ? "Dinero faltante"
                  : "Cuadra exacto"}
            </Text>
            <Text className={`text-3xl text-center font-semibold ${getDifference() >= 0 ? "text-[#00ff00]" : "text-red-700"
              }`}>{Number(getDifference()).toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </TemplateScreen>
  )
}

export default Report
