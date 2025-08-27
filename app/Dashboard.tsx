import TemplateScreen from '@/components/TemplateScreen'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Dashboard = () => {

  const inset = useSafeAreaInsets()

  return (
    <TemplateScreen>

      <View
      className='justify-center flex-1'
      >
        <TouchableOpacity
          onPress={() => router.push('/Planilla')}
          className='bg-primary-light items-center gap-3 py-4 m-6 rounded-xl'
        >
          <Image source={require('../assets/images/dash-report.png')} />

          <Text className='font-roboto text-white text-xl'>
            Nuevo Reporte
          </Text>
        </TouchableOpacity>

      </View>

    </TemplateScreen>
  )
}

export default Dashboard
