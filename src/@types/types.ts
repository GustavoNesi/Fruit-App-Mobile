import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { FruitItem } from '../components/FilterItens';

// Tipos de navegação para o stack
export type RootStackParamList = {
  LogIn: undefined;
  Main: undefined;
  details: { item: FruitItem }; // Parâmetros esperados para a tela 'details'
};

// Tipos de navegação para a navegação de abas (caso use)
export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
};

// Tipos de navegação para a navegação do stack
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Tipos de navegação para a navegação de abas
export type RootTabNavigationProp = BottomTabNavigationProp<RootTabParamList>;
