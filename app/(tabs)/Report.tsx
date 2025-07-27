import ItemReport from "@/components/ItemReport"
import TemplateScreen from "@/components/TemplateScreen"
import { Image, Text, View } from "react-native"

const Report = () => {

  return (
    <TemplateScreen>
      <Text className='text-3xl text-white text-center p-4 font-semibold'>
        Rerporte
      </Text>
      <View className="flex-1 m-4 gap-3">
        <ItemReport source={require('../../assets/images/total-dollar.png')} text="Total de dinero en planilla" amount={25367.35} />
        <ItemReport source={require('../../assets/images/dollar-subtract.png')} text="Descuentos de planilla" amount={25367.35} />
        <ItemReport source={require('../../assets/images/get-cash.png')} text="Dinero en Fisico" amount={25367.35} />
        <ItemReport source={require('../../assets/images/money_lupa.png')} text="Dinero recolectado" amount={25367.35} />
        <View className='p-7 flex-row rounded-xl bg-[#151515]'>
          <Image
            source={require('../../assets/images/arrow_top.png')}
            style={{ width: 50, height: 50, tintColor: 'green' }}
          />
          <View className="gap-2 flex-1">
            <Text className="text-secundary text-center">Dinero excedente o faltante</Text>
            <Text className="text-green-500 text-3xl text-center font-semibold">150.00</Text>
          </View>
        </View>




      </View>

    </TemplateScreen>
  )
}

export default Report
