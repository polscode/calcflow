import ButtonOpacity from '@/components/ButtonOpacity';
import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useEffect, useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Login = () => {

  const router = useRouter();
  const [email, setEmail] = useState('paulsegales@gmail.com');
  const [password, setPassword] = useState('');
  const inset = useSafeAreaInsets();



  const handleLogin = () => {
    alert("Login")
  }

  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#171717');
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ marginTop: inset.top }} className='flex-1 bg-primary-dark'>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />

        <Text className='text-sm text-gray-500 text-right mr-10'>Version 1.0.0</Text>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'height'}
          keyboardVerticalOffset={20}
        >

          <View className=' h-1/3 items-center justify-center'>
            <Image
              source={require('../assets/images/calc-flow.png')}
              style={{ width: 190, height: 150 }}
            />
          </View>

          <View className='bg-primary h-full rounded-[30] p-10 gap-7'>
            <Text className='text-3xl font-semibold text-secundary-light'>Login</Text>

            <Input
              value={email}
              placeholder='Email'
              keyboardType='email-address'
              icon={require('../assets/images/email.png')}
              secureTextEntry={false}
              onChangeText={setEmail}
            />

            <Input
              value={password}
              placeholder='contraseña'
              icon={require('../assets/images/lock.png')}
              secureTextEntry={true}
              onChangeText={setPassword}
            />

            <View>
              <TouchableOpacity onPress={() => alert('¿Olvidaste tu contraseña? que burro, ya fuiste XD...!!!')}>
                <Text className='text-[#867bb8] font-bold text-right'>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <ButtonOpacity
              text='Login'
              onPress={handleLogin}
            />

            <View className="flex-row items-center">
              <View className="flex-1 h-px bg-gray-500" />
              <Text className="mx-4 text-gray-500 text-sm">Or login with</Text>
              <View className="flex-1 h-px bg-gray-500" />
            </View>

            <View className='flex-row justify-center gap-8'>
              <Image
                source={require('../assets/images/facebook.png')}
              />
              <Image
                source={require('../assets/images/google.png')}
              />
              <Image
                source={require('../assets/images/apple.png')}
              />
            </View>

            <View className='flex-row gap-2 justify-center items-center'>
              <Text className='font-semibold text-gray-400'>Don't have account?</Text>
              <TouchableOpacity onPress={() => router.push("/Register")} className='p-1'>
                <Text className='text-[#867bb8] font-semibold'>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-gray-400 text-sm text-center">
              © 2025 Paul Segales. Todos los derechos reservados.
            </Text>

          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login
