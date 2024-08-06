import { useFonts, Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter"
import AppLoading from "expo-app-loading";

import { ThemeProvider } from 'styled-components/native'

import theme from "./src/theme";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/app/Home";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn } from "./src/app/LogIn";
import { Register } from "./src/app/Register";

const Stack = createNativeStackNavigator()

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const user = false;
  
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        <Stack.Navigator initialRouteName='LandPage'>
          { user ?
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            :
            <>
              <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
            </>
          }
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
    
    
  );
}
