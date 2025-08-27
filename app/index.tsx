import { useFonts } from 'expo-font';
import '../global.css';
import Login from './Login';

export default function Index() {

  const [fontsLoaded] = useFonts({
    RobotoRegular: require('../assets/fonts/Roboto_SemiCondensed-Medium.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Medium.ttf'),
    Lato: require('../assets/fonts/Lato-Regular.ttf'),
  })
  return (
    <>
      <Login/>
    </>
  );
}
