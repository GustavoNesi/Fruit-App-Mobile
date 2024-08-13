import { useState } from "react";

import { ButtonCounter, 
  CardContainer, 
  CardDescription, 
  CardHeader, 
  CardName, 
  CardPriceContainer, 
  CartProductContainer, 
  ContainerOpacity, 
  Counter, 
  CounterValue,
  Image, 
  ImageContainer, 
  PriceText, 
  Value 
} from "./styles";

import Feather from '@expo/vector-icons/Feather';
import { useCart } from "../../hooks/CartContext";


interface CardProps {
    id: string;
    name: string;
    description: string;
    price_per_unit: number;
    image_url: any;
    quantity: number;
    background_color: string;
  }
  
  export function Card({ id, name, price_per_unit, image_url, quantity, description, background_color }: CardProps) {
    const [count, setCount] = useState(quantity);
    const { removeItemFromCart, updateItemQuantity } = useCart();
  
    function decrement() {
      if (count > 1) { 
        const newCount = count - 1;
        setCount(newCount);
        updateItemQuantity(id, newCount);
      }
    }
  
    function increment() {
      const newCount = count + 1;
      setCount(newCount);
      updateItemQuantity(id, newCount);
    }
  
    function handleRemoveFromCart() {
      removeItemFromCart(id);
    }
  
    return (
      <>
        <ContainerOpacity background_color={background_color}/>

        <CartProductContainer>
          <ImageContainer >
              <Image source={{uri : image_url}} background_color={background_color}/>
            </ImageContainer>
            <CardContainer>
              <CardHeader>
                <CardName>{name}</CardName>
                <Feather name="trash-2" size={24} color="#A02334" onPress={handleRemoveFromCart} />
              </CardHeader>
              <CardDescription>{description}</CardDescription>
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
      </>
      
    );
  }