import { Button, Container, ContainerInputs, ContentContainer, Img, Inputs, SubTitle, TextButton, Title, TypeProps } from "./styles";

import Background from "../../assets/background.jpg";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from "react-native";

export function LogIn() {
    const [isFocused, setIsFocused] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    async function signIn() {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error: any) {
            console.log(error)
            alert('Sing in Failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }
 
    async function signUp() {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('Check your emails!')
        } catch (error: any) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    
 

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
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Inputs
                        focused={isFocused}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    { loading ? 
                        <ActivityIndicator size='large' color="#346751"/>
                        :
                        <>
                            <Button type="primary" onPress={() => signIn()}> 
                                <TextButton>Login</TextButton>
                            </Button>
                            <Button type="secondary" onPress={() => signUp()}>
                                <TextButton>Criar a Conta</TextButton>
                            </Button>
                        </>
                            
                    }
                </ContainerInputs> 
            </ContentContainer>
            
        </Container>
    );
};