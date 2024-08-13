import React, { useEffect, useState } from 'react';

import { Container, 
  ContainerPurchase, 
  ImageStyle, 
  Item, 
  ItemDescriptionContainer, 
  ItemImageContainer, 
  ItemName, 
  ItemPrice, 
  ItemPricePerKg, 
  ItemTextContainer
} from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from 'firebase/firestore';
import { RootStackNavigationProp } from "../../@types/types";
import { FIREBASE_DB, FIREBASE_STORAGE } from '../../../FirebaseConfig';
import { getDownloadURL, ref } from 'firebase/storage';

export interface FruitItem {
  id: string;
  name: string;
  price_per_kg: number;
  price_per_unit: number;
  background_color: string;
  description: string;
  image_url: string;
}

export function Items({ searchQuery }: { searchQuery: string }) {
  const [fruits, setFruits] = useState<FruitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        // Busca todos os documentos da coleção 'fruits'
        const querySnapshot = await getDocs(collection(FIREBASE_DB, 'fruits'));
        const fruitList: FruitItem[] = [];

        // Processa cada documento
        for (const doc of querySnapshot.docs) {
          const data = doc.data() as FruitItem;
          const imageRef = ref(FIREBASE_STORAGE, data.image_url);
          const imageUrl = await getDownloadURL(imageRef);

          fruitList.push({
            ...data,
            id: doc.id,
            image_url: imageUrl
          });
        }
        setFruits(fruitList);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  // Filtra as frutas com base na consulta de pesquisa
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Container>
      {filteredFruits.map((item) => (
        <Item 
          key={item.id} 
          backgroundColor={item.background_color} 
          onPress={() => navigation.navigate('details', { item })}
        >
          <ItemImageContainer>
            <ImageStyle source={{ uri: item.image_url }} />
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
    </Container>
  );
}
