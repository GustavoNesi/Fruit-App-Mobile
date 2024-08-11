import { useState } from "react";
import { ButtonCounter, CardContainer, CardDescription, CardHeader, CardName, CardPriceContainer, CartProductContainer, Counter, CounterValue, Image, ImageContainer, PriceText, Value } from "./styles";

import Feather from '@expo/vector-icons/Feather';
import { useCart } from "../../hooks/CartContext";


// Defina o tipo para as props do componente Card
interface CardProps {
    id: string;
    name: string;
    price_per_unit: number;
    image_url: any;
    quantity: number;
  }
  
  export function Card({ id, name, price_per_unit, image_url, quantity }: CardProps) {
    const [count, setCount] = useState(quantity);
    const { addItemToCart } = useCart();
  
    function decrement() {
      if (count > 1) { 
        setCount(count - 1);
      }
    }
  
    function increment() {
      setCount(count + 1);
    }
  
    function removeFromCart() {
      // Lógica para remover o item do carrinho
      // Isso pode ser implementado ajustando o estado do carrinho conforme necessário
    }
  
    return (
      <CartProductContainer>
        <ImageContainer>
          <Image source={image_url} />
        </ImageContainer>
        <CardContainer>
          <CardHeader>
            <CardName>{name}</CardName>
            <Feather name="trash-2" size={24} color="#A02334" onPress={removeFromCart} />
          </CardHeader>
          <CardDescription>{name}</CardDescription>
          <CardPriceContainer>
            <Counter>
              <ButtonCounter onPress={decrement}>
                <CounterValue>-</CounterValue>
              </ButtonCounter>
              <Value>{count}</Value>
              <ButtonCounter onPress={increment}>
                <CounterValue>+</CounterValue>
              </ButtonCounter>
            </Counter>
            <PriceText>R$ {(price_per_unit * count).toFixed(2)}</PriceText>
          </CardPriceContainer>
        </CardContainer>
      </CartProductContainer>
    );
  }