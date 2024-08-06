import { useFonts, Merriweather_400Regular } from "@expo-google-fonts/merriweather"
import AppLoading from "expo-app-loading";

import { ThemeProvider } from 'styled-components/native'

import theme from "./src/theme";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Merriweather_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}
