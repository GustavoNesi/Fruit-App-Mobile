import React, { useState } from 'react';

import { 
  BagContainer,
  BagCounter,
  Button, 
  ButtonText, 
  Container, 
  ContentContainer, 
  ContentWrapper, 
  Header, 
  IconsContainer, 
  ImageFruit, 
  NameContainer, 
  NameText, 
  NotificationContainer, 
  NotificationText, 
  PriceContainer, 
  PriceText, 
  StarContainer,
  TextDescription, 
} 
from './styles';

import AntDesign from '@expo/vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackParamList } from '../../../@types/types';
import { useCart } from '../../../hooks/CartContext';


type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'details'>;

export default function ItemDetailScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const [stars, setStars] = useState([false, false, false, false, false]);
  const navigation = useNavigation<RootStackNavigationProp>();

  const [notificationVisible, setNotificationVisible] = useState(false);


  const { addItemToCart } = useCart();

  function toggleFavorite() {
    setIsFavorite(!isFavorite); 
  };

  function toggleStar(index) {
    const isStarOn = stars[index];

    if (isStarOn) {
      // Se a estrela está acesa, apague todas as estrelas a partir do índice clicado
      setStars(stars.map((_, i) => i < index ? true : false));
    } else {
      // Se a estrela está apagada, acenda todas as estrelas até o índice clicado
      setStars(stars.map((_, i) => i <= index));
    }
  };

  function handleAddToCart() {
    addItemToCart(item, count);

    setNotificationVisible(true);

    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
  }

  return (
      <Container>

        <Header>
          <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()}/>

          <IconsContainer>

            <AntDesign
              name={isFavorite ? "heart" : "hearto"} 
              size={24}
              color={isFavorite ? "#A02334" : "#000"}
              onPress={toggleFavorite}
            />
          </IconsContainer>
          
        </Header>

        <ContentWrapper>
          <ContentContainer backgroundColor={item.background_color}>

            <NameContainer>

              <NameText>{item.name}</NameText>

              <StarContainer>
                {stars.map((star, index) => (
                  <TouchableOpacity key={index} onPress={() => toggleStar(index)}>
                    <AntDesign
                      name={star ? "star" : "staro"}
                      size={24}
                      color={star ? "#FFB22C" : "#FFF"}
                    />
                  </TouchableOpacity>
                ))} 
              </StarContainer>
              
            </NameContainer>

            <PriceContainer>

                <PriceText>R$ {(item.price_per_unit * count).toFixed(2)}</PriceText>

            </PriceContainer>

            <TextDescription>
                {item.description}
            </TextDescription>

            <Button backgroundColor={item.background_color} onPress={handleAddToCart}>
                <ButtonText>Adicionar ao Carrinho</ButtonText>
            </Button>
          </ContentContainer>

          <ImageFruit source={{ uri: item.image_url }} backgroundColor={item.background_color}/>
      </ContentWrapper>

      {notificationVisible && (
        <NotificationContainer>
          <NotificationText>Item adicionado ao carrinho!</NotificationText>
        </NotificationContainer>
      )}

    </Container>
  );
};