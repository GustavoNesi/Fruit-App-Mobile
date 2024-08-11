import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../app/Home';
import { Cart } from '../app/Home/Cart';
import ItemDetailScreen from '../app/Home/Product';
import { CartProvider } from '../hooks/CartContext';

const Tab = createBottomTabNavigator();
const InsideStack = createNativeStackNavigator();

function InsideStackNavigator() {
  return (
      <InsideStack.Navigator >
        <InsideStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <InsideStack.Screen name="details" component={ItemDetailScreen} options={{ headerShown: false }} />
      </InsideStack.Navigator>
    
  );
}

export function InsideLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: "#222831",
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 60,
          width: 300,
          left: 50,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={InsideStackNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Entypo name="home" size={size} color="#F7F7F7" /> : <AntDesign name="home" size={size} color="#F7F7F7" />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Ionicons name="bag-handle-sharp" size={size} color="#F7F7F7" /> : <Ionicons name="bag-handle-outline" size={size} color="#F7F7F7" />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
