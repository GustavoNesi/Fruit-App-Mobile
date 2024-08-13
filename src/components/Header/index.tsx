import { useNavigation } from "@react-navigation/native";
import { AvatarContainer, Container, Img, MarketContainer, SubTitle, TextContainer, Title, TitleContainer } from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackNavigationProp } from "../../@types/types";

export function Header() {
    const navigation = useNavigation<RootStackNavigationProp>();

    return(
        <Container>

            <TitleContainer>
                <AvatarContainer>
                    <Img source={{uri: "https://github.com/gustavonesi.png"}}/>
                </AvatarContainer>
                <TextContainer>
                    <Title>Welcome Back</Title>
                    <SubTitle>Gustavo Nesi</SubTitle>
                </TextContainer> 
            </TitleContainer>
            

            <MarketContainer>
                <Ionicons name="bag-handle-outline" size={24} color="#222831" /*{onPress={() => navigation.navigate('Cart')}}*//>
            </MarketContainer>
        </Container>
    )
}