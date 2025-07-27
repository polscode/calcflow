import { Tabs } from "expo-router";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {

  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#171717',
          paddingTop: 10,
          paddingBottom: insets.bottom,
          height: 80 + insets.bottom,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: '#8f7fd6',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600'
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Planilla') {
            icon = focused
              ? require('../../assets/images/planilla.png')
              : require('../../assets/images/planilla.png'); 
          } else if (route.name === 'Discount') {
            icon = focused
              ? require('../../assets/images/discount.png')
              : require('../../assets/images/discount.png');
          } else if (route.name === 'Money') {
            icon = focused
              ? require('../../assets/images/money1.png')
              : require('../../assets/images/money1.png');
          } else if (route.name === 'Report') {
            icon = require('../../assets/images/report.png')
          }

          return (
            <Image
              source={icon}
              style={{ width: 32, height: 32, tintColor: focused ? '#8f7fd6' : '#b2bec3' }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tabs.Screen name='Planilla' options={{ title: "Planilla" }} />
      <Tabs.Screen name='Discount' options={{ title: "Descuentos" }} />
      <Tabs.Screen name='Money' options={{ title: "Dinero" }} />
      <Tabs.Screen name='Report' options={{ title: "Reporte" }} />
    </Tabs>
  )
}