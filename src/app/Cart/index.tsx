import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { 
  ButtonContainer, 
  CardLayoutContainer, 
  CheckoutContainer, 
  Container, 
  ContainerTextTotalItems, 
  EmptyList, 
  EmptyText, 
  Header, 
  List, 
  PriceContainer, 
  PriceText, 
  TextCart, 
  TotalItemsText
} from './styels';

import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../@types/types';
import { useCart } from '../../hooks/CartContext';
import { Card } from '../../components/Card';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price_per_unit: number;
  image_url: string;
  background_color: string;
  quantity: number;
}

export function Cart() {
  const { cartItems } = useCart();
  const navigation = useNavigation<RootStackNavigationProp>();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price_per_unit * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <Container>
      <Header>
        <ButtonContainer>
          <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
        </ButtonContainer>
        <TextCart>Meu Carrinho</TextCart>
      </Header>
      <ContainerTextTotalItems>
        <TotalItemsText>{cartItems.length} Items</TotalItemsText>
      </ContainerTextTotalItems>
      <CardLayoutContainer>
        {cartItems.length > 0 ? (
          <List
            data={cartItems}
            renderItem={({ item }: { item: CartItem }) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price_per_unit={item.price_per_unit}
                image_url={item.image_url}
                quantity={item.quantity}
                background_color={item.background_color}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
          />
        ) : (
          <EmptyList>
            <EmptyText>Seu carrinho está vazio. Adicione alguns itens para começar.</EmptyText>
          </EmptyList>

        )}
        
      </CardLayoutContainer>
      <CheckoutContainer>
        <PriceContainer>
          <TotalItemsText>Preço Total</TotalItemsText>
          <PriceText>R$ {totalPrice.toFixed(2)}</PriceText>
        </PriceContainer>
      </CheckoutContainer>
    </Container>
  );
}
