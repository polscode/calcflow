import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import React, { useEffect, useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface User {
  email: string;
  password: string;
  repeatPassword: string
}
const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  })
  const inset = useSafeAreaInsets()
  const router = useRouter();

  const handleChange = (key: keyof User, value: string) => {
    setUser(prev => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#171717');
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ marginTop: inset.top }} className='flex-1 bg-primary-dark'>
        <StatusBar barStyle="light-content" backgroundColor="#212121" />

        <TouchableOpacity onPress={() => router.push("/Login")} className='flex-row items-center mt-5 ml-7'>
          <Image
            source={require('../assets/images/back.png')}
            className='w-10 h-10'
          />
          <Text className='text-[#858586] text-xl font-bold'>
            Retornar a Login
          </Text>
        </TouchableOpacity>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'height'}
          keyboardVerticalOffset={20}
        >


          <View className=' h-1/4 items-center justify-center mt-2'>
            <Image
              source={require('../assets/images/calc-flow.png')}
              style={{ width: 190, height: 150 }}
            />
          </View>


          <View className='bg-primary h-full rounded-[30] p-10 gap-7'>

            <Text className='text-3xl font-semibold text-[#867bb8]'>Sign Up</Text>

            <Input
              value={user.email}
              placeholder='Email'
              keyboardType='email-address'
              icon={require('../assets/images/email.png')}
              secureTextEntry={false}
              onChangeText={(text) => handleChange('email', text)}
            />

            <Input
              value={user.password}
              placeholder='Contraseña'
              icon={require('../assets/images/lock.png')}
              secureTextEntry={true}
              onChangeText={(text) => handleChange('password', text)}
            />

            <Input
              value={user.repeatPassword}
              placeholder='Repetir Contraseña'
              icon={require('../assets/images/lock.png')}
              secureTextEntry={true}
              onChangeText={(text) => handleChange('repeatPassword', text)}
            />

            <TouchableOpacity className='bg-[#594797] p-4 rounded-lg'>
              <Text className='text-white font-semibold text-center text-xl'>
                Sign Up
              </Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Register
