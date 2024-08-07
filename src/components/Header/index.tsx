import { AvatarContainer, Container, Img, MarketContainer, Text } from "./styles";

import Feather from '@expo/vector-icons/Feather';

export function Header() {
    return(
        <Container>
           <AvatarContainer>
                <Img source={{uri: "https://github.com/gustavonesi.png"}}/>
           </AvatarContainer>

           <MarketContainer>
                <Feather name="shopping-cart" size={24} color="#346751" />
           </MarketContainer>
        </Container>
    )
}