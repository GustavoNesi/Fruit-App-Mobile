import { Container, ContainerPurchase, Image, Item, ItemDescriptionContainer, ItemImageContainer, ItemName, ItemPrice, ItemPricePerKg, ItemTextContainer, RowContainer } from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';

import Fruit from "../../assets/fruits/fruit1.png"

const items = [
    { id: '1', text: '13', backgroundColor: "#346751" },
    { id: '2', text: '23', backgroundColor: "#A02334" },
    { id: '3', text: '33', backgroundColor: "#03346E" },
    { id: '4', text: '43', backgroundColor: "#522258" },
    { id: '5', text: '53', backgroundColor: "#36BA98" },
    { id: '6', text: '63', backgroundColor: "#C84B31" },
    { id: '7', text: '73', backgroundColor: "#522258" },
    { id: '8', text: '83', backgroundColor: "#346751" },
];

export function Items() {
    return(
        <Container>
            <RowContainer>
                {items.map((item) => (
                    <Item key={item.id} backgroundColor={item.backgroundColor}>

                        <ItemImageContainer>
                            <Image source={Fruit}/>
                        </ItemImageContainer>

                        <ItemTextContainer>

                            <ItemDescriptionContainer>
                                <ItemName>Morango</ItemName>
                                <ItemPricePerKg>$4.80/Kg</ItemPricePerKg>
                                <ItemPrice>$4.80</ItemPrice>
                            </ItemDescriptionContainer>

                            <ContainerPurchase backgroundColor={item.backgroundColor}>
                                <Ionicons name="cart-outline" size={30} color="white" />
                            </ContainerPurchase>

                        </ItemTextContainer>
                    </Item>
                ))}
            </RowContainer>
        </Container>
    )
}
