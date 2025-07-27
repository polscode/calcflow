import ButtonOpacity from '@/components/ButtonOpacity'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Dashboard = () => {

  const inset = useSafeAreaInsets()

  return (
    <View style={{marginTop: inset.top, marginBottom: inset.bottom}}>
      <ButtonOpacity
        text='Nuevo Reporte'
        onPress={()=> router.push('/Planilla') }
      />
      
    </View>
  )
}

export default Dashboard
