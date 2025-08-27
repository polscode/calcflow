import Accordion from "@/components/accordion/Accordion"
import { AccordionBody } from "@/components/accordion/AccordionBody"
import { AccordionHeader } from "@/components/accordion/AccordionHeader"
import AccordionItem from "@/components/accordion/AccordionItem"
import HeaderDiscount from "@/components/HeaderDiscount"
import SumOfAmount from "@/components/SumOfAmount"
import TemplateScreen from "@/components/TemplateScreen"
import { useReportStore } from "@/stores/report.store"
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native"

const Discount = () => {

  const discounts = useReportStore(state => state.report.discounts)
  const totalDiscount = useReportStore(state => state.getTotalDiscount())
  const updateDiscounts = useReportStore(state => state.updateDiscount)
  const getDiscountTotalByIndex = useReportStore(state => state.getDiscountTotalByIndex)

  const itemsDiscounts = [
    { key: 'ANULADO', title: 'Anulados', icon: 'anulado' },
    { key: 'DESCUENTO', title: 'Notas de crédito', icon: 'descuento' },
    { key: 'CREDITO', title: 'Creditos', icon: 'credito' },
    { key: 'TRANSFERENCIA', title: 'Transferencias', icon: 'transferencia' },
    { key: 'EFECTIVO', title: 'Efectivo', icon: 'efectivo' },
    { key: 'PARQUEO', title: 'Parqueos', icon: 'parqueo' },
    { key: 'OTROS', title: 'Otros', icon: 'otros' }
  ]

  return (
    <TemplateScreen>
      <View className="justify-center gap-2">
        <View className="flex-row items-center gap-2 justify-center pt-6">
          <Image
            source={require('../../assets/images/dollar-subtract.png')}
            style={{ height: 35, width: 35 }}
          />
          <Text className="text-xl text-[#bfb7e0]">Descuentos de Planilla</Text>
        </View>
        <Text className="text-white text-4xl text-center font-semibold py-4">
          {totalDiscount.toFixed(2)}
        </Text>
      </View>

      {/* Lista de descuentos */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'height'}
        keyboardVerticalOffset={10}
        className="bg-primary rounded-tl-3xl rounded-tr-3xl"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          contentContainerClassName="py-7 px-5"
        >
          <Accordion className="gap-1">
            {itemsDiscounts.map((item, index) => (
              <AccordionItem key={item.key} itemKey={index}>
                <AccordionHeader>
                  <HeaderDiscount
                    title={item.title}
                    icon={item.icon}
                    number={getDiscountTotalByIndex(index)}
                  />
                </AccordionHeader>
                <AccordionBody>
                  <SumOfAmount
                    index={index}
                    arrayAmount={discounts[index].amounts}
                    updateDiscounts={updateDiscounts}
                  />
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollView>
      </KeyboardAvoidingView>
    </TemplateScreen>
  )
}

export default Discount
