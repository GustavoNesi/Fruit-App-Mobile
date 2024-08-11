import React from 'react';
import { useCart } from "../../../hooks/CartContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from "../../../components/Card";
import { ButtonContainer, CardLayoutContainer, Container, ContainerTextTotalItems, Header, List, TextCart, TotalItemsText } from './styels';

// Atualize a interface para tipar o item corretamente
interface CartItem {
  id: string;
  name: string;
  price_per_unit: number;
  image_url: any; // Tipo adequado para a imagem
  quantity: number;
}

export function Cart() {
  const { cartItems } = useCart();

  return (
    <Container>
      <Header>
        <ButtonContainer>
          <AntDesign name="left" size={24} color="black" />
        </ButtonContainer>
        <TextCart>Meu Carrinho</TextCart>
      </Header>
      <ContainerTextTotalItems>
        <TotalItemsText>{cartItems.length} Items</TotalItemsText>
      </ContainerTextTotalItems>
      <CardLayoutContainer>
        <List
          data={cartItems}
          renderItem={({ item }: { item: CartItem }) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price_per_unit={item.price_per_unit}
              image_url={item.image_url}
              quantity={item.quantity}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
        />
      </CardLayoutContainer>
    </Container>
  );
}
