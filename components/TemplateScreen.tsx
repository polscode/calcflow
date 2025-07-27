import * as SystemUI from 'expo-system-ui';
import { ReactNode, useEffect } from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TemplateScreenProps {
  children?: ReactNode;
}

const TemplateScreen = ({ children }: TemplateScreenProps) => {
  const inset = useSafeAreaInsets();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#171717');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ marginTop: inset.top }} className='flex-1 bg-primary-dark'>
        <StatusBar barStyle="light-content" backgroundColor="#212121" />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TemplateScreen;
