import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import IoniconsOutline from '@expo/vector-icons/Ionicons';

import {Home} from "../app/Home";
import {Cart} from "../app/Home/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetailScreen from "../app/Home/Product";

const Tab = createBottomTabNavigator();

const InsideStack = createNativeStackNavigator();

export function InsideLayout() {
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name='My tolls' component={Home} options={{ headerShown: false }}/>
      <InsideStack.Screen name='details' component={ItemDetailScreen} options={{ headerShown: false }}/>
    </InsideStack.Navigator>
  )
}

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1A4D2E',
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 60,
          width: 300,
          left: 50,
        }
      }}
    >
      <Tab.Screen 
        name="Home"  
        component={Home} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Entypo name="home" size={size} color="#F7F7F7" />
            } else {
              return <AntDesign name="home" size={size} color="#F7F7F7" />
            }
          } 
        }}
      />

      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Ionicons name="bag-handle-sharp" size={24} color="#F7F7F7" />
            } else {
              return <IoniconsOutline name="bag-handle-outline" size={24} color="#F7F7F7" />
            }
          } 
        }}
      />

      <Tab.Screen 
        name="Liked"  
        component={Home} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Entypo name="home" size={size} color="#F7F7F7" />
            } else {
              return <AntDesign name="home" size={size} color="#F7F7F7" />
            }
          } 
        }}
      />

    </Tab.Navigator>
  );
}
