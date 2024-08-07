import { AvatarContainer, Container, Img, MarketContainer, Text } from "./styles";

import Feather from '@expo/vector-icons/Feather';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export function Header() {
    return(
        <Container>
           <AvatarContainer>
                <Img source={{uri: "https://github.com/gustavonesi.png"}}/>
           </AvatarContainer>

           <MarketContainer>
                <FontAwesome5 name="map-marker-alt" size={22} color="#A02334" />
                <Feather name="shopping-cart" size={24} color="#346751" />
           </MarketContainer>
        </Container>
    )
}