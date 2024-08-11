import React, { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';
import { Container, ContainerPurchase, Item, ItemDescriptionContainer, ItemImageContainer, ItemName, ItemPrice, ItemPricePerKg, ItemTextContainer, RowContainer } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { collection, getDocs } from 'firebase/firestore';
import { RootStackNavigationProp } from "../../@types/types";
import { FIREBASE_DB } from '../../../FirebaseConfig';

export interface FruitItem {
  id: string;
  name: string;
  price_per_kg: number;
  price_per_unit: number;
  background_color: string;
  description: string;
  image_url: string;
}

export function Items() {
  const [fruits, setFruits] = useState<FruitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, 'fruits'));
        const fruitList: FruitItem[] = [];
        querySnapshot.forEach(doc => {
          const data = doc.data() as FruitItem;
          fruitList.push({ ...data, id: doc.id });
        });
        setFruits(fruitList);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <RowContainer>
        {fruits.map((item) => (
          <Item 
            key={item.id} 
            backgroundColor={item.background_color} 
            onPress={() => navigation.navigate('details', { item })}
          >
            <ItemImageContainer>
              <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
            </ItemImageContainer>
            <ItemTextContainer>
              <ItemDescriptionContainer>
                <ItemName>{item.name}</ItemName>
                <ItemPricePerKg>{item.price_per_kg} / Kg</ItemPricePerKg>
                <ItemPrice>R$ {item.price_per_unit}</ItemPrice>
              </ItemDescriptionContainer>
              <ContainerPurchase 
                backgroundColor={item.background_color} 
                onPress={() => navigation.navigate('details', { item })}
              >
                <Ionicons name="cart-outline" size={30} color="white" />
              </ContainerPurchase>
            </ItemTextContainer>
          </Item>
        ))}
      </RowContainer>
    </Container>
  );
}
