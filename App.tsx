import { useFonts, Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter"

import * as SplashScreen from 'expo-splash-screen';

import { ThemeProvider } from 'styled-components/native'
import theme from "./src/theme";

import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/app/Home";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn } from "./src/app/LogIn";

import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { InsideLayout, MyTabs } from "./src/routes/routes";
import ItemDetailScreen from "./src/app/Home/Product";

const Stack = createNativeStackNavigator()


SplashScreen.preventAutoHideAsync(); 

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  },[])


  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        <Stack.Navigator initialRouteName='LogIn'>
          { user ?
            <>
              <Stack.Screen name="Main" component={InsideLayout} options={{ headerShown: false }} />
            </>
            :
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
          }
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
    
    
  );
}

