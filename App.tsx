import { useFonts } from 'expo-font';
import { extendTheme, Text } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import customFont from './src/assets/fonts';
import customTheme from './src/assets/theme'
import AppHandler from './AppHandler'

export default function App() {
  const [fontsLoaded] = useFonts(customFont)
  if(!fontsLoaded) return undefined
  const theme = extendTheme(customTheme)
  return (
    <NativeBaseProvider theme={theme} >
        <AppHandler />
    </NativeBaseProvider>
  );
}
