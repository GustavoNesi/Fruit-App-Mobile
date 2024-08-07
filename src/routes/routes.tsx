import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import IoniconsOutline from '@expo/vector-icons/Ionicons';

import {Home} from "../app/Home";
import {Product} from "../app/Home/Product";
import {Cart} from "../app/Home/Cart";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1A4D2E',
          borderTopWidth: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 60,
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

    </Tab.Navigator>
  );
}
