import { Container, ContainerPurchase, Image, Item, ItemDescriptionContainer, ItemImageContainer, ItemName, ItemPrice, ItemPricePerKg, ItemTextContainer, RowContainer } from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';

import Fruit from "../../assets/fruits/fruit1.png"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../@types/types";

export interface FruitItem {
    id: string;
    FruitName: string;
    pricePerKg: string;
    price: string;
    backgroundColor: string;
    description: string;
    // image: number;
  }

const items: FruitItem[] = [
    {
        id: '1',
        FruitName: 'Morango',
        pricePerKg: '1 Kg',
        price: '4.80',
        backgroundColor: '#346751',
        description: 'Morangos frescos e suculentos, perfeitos para sobremesas, smoothies e saladas. Com um sabor doce e levemente ácido, são uma excelente fonte de vitamina C e antioxidantes.',
        // image: require()
    },
    {
        id: '2',
        FruitName: 'Maçã',
        pricePerKg: '1 Kg',
        price: '3.50',
        backgroundColor: '#A02334',
        description: 'Maçãs crocantes e suculentas, ideais para lanches rápidos ou para usar em tortas e saladas. Disponíveis em várias variedades, elas são ricas em fibras e vitaminas essenciais.',
        // image: require()
    },
    {
        id: '3',
        FruitName: 'Banana',
        pricePerKg: '1 Kg',
        price: '2.20',
        backgroundColor: "#03346E",
        description: 'Bananas maduras e doces, perfeitas para um lanche energético ou para adicionar a smoothies e sobremesas. Elas são uma excelente fonte de potássio e fornecem energia rápida.',
        // image: require()
    },
    {
        id: '4',
        FruitName: 'Laranja',
        pricePerKg: '1 Kg',
        price: '5.00',
        backgroundColor: "#A02334",
        description: 'Laranjas frescas e vibrantes, conhecidas por seu sabor doce e ácido. Ótimas para fazer sucos, adicionar a saladas ou comer sozinhas, são uma rica fonte de vitamina C e antioxidantes.',
        // image: require()
    },
    {
        id: '5',
        FruitName: 'Uva',
        pricePerKg: '1 Kg',
        price: '6.00',
        backgroundColor: '#6F2C91',
        description: 'Uvas doces e suculentas, disponíveis em variedades verdes, vermelhas e roxas. Perfeitas para um lanche rápido, em saladas ou como acompanhamento de queijos. São ricas em vitaminas e minerais.',
        // image: require()
    },
    {
        id: '6',
        FruitName: 'Pêra',
        pricePerKg: '1 Kg',
        price: '4.00',
        backgroundColor: "#C84B31",
        description: 'Pêras maduras e doces, com uma textura macia e suculenta. Ideais para comer ao natural, em sobremesas ou adicionadas a saladas. São uma boa fonte de fibras dietéticas e vitaminas.',
        // image: require()
    },
    {
        id: '7',
        FruitName: 'Kiwi',
        pricePerKg: '1 Kg',
        price: '7.50',
        backgroundColor: "#346751",
        description: 'Kiwi exótico e tangy, com uma polpa verde vibrante e sabor refrescante. Excelente em saladas de frutas, smoothies ou como acompanhamento de pratos doces e salgados. É rico em vitamina C e fibras.',
        // image: require()
    },
    {
        id: '8',
        FruitName: 'Manga',
        pricePerKg: '1 Kg',
        price: '8.00',
        backgroundColor: "#03346E",
        description: 'Mangas doces e suculentas, ideais para comer sozinhas, em saladas ou em pratos exóticos. Com sua polpa macia e sabor intenso, são uma excelente fonte de vitaminas A e C, além de antioxidantes.',
        // image: require()
    },
];

export function Items() {
    const navigation = useNavigation<RootStackNavigationProp>();

    return(
        <Container>
            <RowContainer>
                {items.map((item) => (
                    <Item 
                        key={item.id} 
                        backgroundColor={item.backgroundColor} 
                        onPress={() => navigation.navigate('details', {
                            item,
                        })}
                    >

                        <ItemImageContainer>
                            <Image source={Fruit}/>
                        </ItemImageContainer>

                        <ItemTextContainer>

                            <ItemDescriptionContainer>
                                <ItemName>{item.FruitName}</ItemName>
                                <ItemPricePerKg>{item.pricePerKg}</ItemPricePerKg>
                                <ItemPrice>{item.price}</ItemPrice>
                            </ItemDescriptionContainer>

                            <ContainerPurchase 
                              backgroundColor={item.backgroundColor} 
                              onPress={() => navigation.navigate('details', {
                                item,
                              })}
                            >
                                <Ionicons name="cart-outline" size={30} color="white" />
                            </ContainerPurchase>

                        </ItemTextContainer>
                    </Item>
                ))}
            </RowContainer>
        </Container>
    )
}
