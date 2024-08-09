import React, { useState } from 'react';

import { 
  Button, 
  ButtonCounter, 
  ButtonText, 
  Container, 
  ContentContainer, 
  ContentWrapper, 
  Counter, 
  CounterValue, 
  Header, 
  ImageFruit, 
  NameContainer, 
  NameText, 
  PriceContainer, 
  PriceText, 
  StarContainer, 
  TextDescription, 
  Value } 
from './styles';

import AntDesign from '@expo/vector-icons/AntDesign';

import fruit from "../../../assets/fruits/fruit1.png"
import { TouchableOpacity } from 'react-native';

export default function ItemDetailScreen({ route }) {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const [stars, setStars] = useState([false, false, false, false, false])

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

  function decrement() {
    if (count > 1) { 
      setCount(count - 1);
    }
  }
  
  return (
      <Container>

        <Header>
          <AntDesign name="left" size={24} color="black" />
          <AntDesign
            name={isFavorite ? "heart" : "hearto"} 
            size={24}
            color={isFavorite ? "#A02334" : "#000"}
            onPress={toggleFavorite}
          />
        </Header>

        <ContentWrapper>
          <ContentContainer backgroundColor={item.backgroundColor}>

            <NameContainer>

              <NameText>{item.FruitName}</NameText>

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

                <Counter>

                  <ButtonCounter onPress={decrement}>

                    <CounterValue>-</CounterValue>

                  </ButtonCounter>

                  <Value>{count}</Value>

                  <ButtonCounter onPress={() => setCount(count + 1)}>

                    <CounterValue>+</CounterValue>

                  </ButtonCounter>

                </Counter>

                <PriceText>$ {(item.price * count).toFixed(2)}</PriceText>

            </PriceContainer>

            <TextDescription>
                {item.description}
            </TextDescription>

            <Button backgroundColor={item.backgroundColor}>
                <ButtonText>Adicionar ao Carrinho</ButtonText>
            </Button>
          </ContentContainer>

          <ImageFruit source={fruit} />
      </ContentWrapper>

    </Container>
  );
};