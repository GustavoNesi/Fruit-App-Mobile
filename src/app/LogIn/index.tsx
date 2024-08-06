import { Text, View } from "react-native";
import { Button, Container, ContainerInputs, ContentContainer, Img, Inputs, SubTitle, TextButton, Title, TypeProps } from "./styles";

import Background from "../../assets/background.jpg"

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";

export function LogIn() {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <Container>
            <Img source={Background}/>
            <ContentContainer>
                <Title>
                    <MaterialCommunityIcons name="fruit-watermelon" size={24} color="#C84B31" />
                    BookStore
                </Title>
                <SubTitle>Acesso Rápido ao Mundo das Frutas Frescas!</SubTitle>

                <ContainerInputs>
                    <Inputs
                        focused={isFocused}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="E-mail"
                    />

                    <Inputs
                        focused={isFocused}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Senha"
                      
                    />

                    <Button type="primary">
                        <TextButton>Login</TextButton>
                    </Button>
                    <Button type="secondary">
                        <TextButton>Criar a Conta</TextButton>
                    </Button>
                </ContainerInputs> 
            </ContentContainer>
            
        </Container>
    )
}