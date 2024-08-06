import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

export type TypeProps = 'primary' | 'secondary';

type ButtonContainerProps = {
    type: TypeProps;
}


export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black}
`

export const Img = styled.Image`
    width: 100%;
    height: 400px;
    position: absolute;
`
export const ContentContainer = styled.View`
    width: 100%;
    height: 400px;

    margin-top: 350px;
    border-radius: 25px;
    
    background-color: ${({ theme }) => theme.colors.black};
    align-items: center;
    position: relative;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: bold;
    
    margin-top: 10px;
`

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 13px;
    
    margin-top: 10px;
    padding-right: 30px;
    padding-left: 30px;
`

export const ContainerInputs = styled.View`
    margin-top: 30px;
    gap: 15px;
    padding: 10px;
`

export const Inputs = styled.TextInput`
    width: 320px;
    height: 50px;

    padding: 10px;

    border-radius: 12px;
    border: 2px;
    border-color: ${({ focused, theme }) => focused ? theme.colors.green400 : theme.colors.gray200};
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.white};

`

export const Button = styled.TouchableOpacity<ButtonContainerProps>`
    width: 320px;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    border: 2px;
    border-color: ${({ theme, type }) => type === 'primary' ? theme.colors.green400 : theme.colors.red300};
    background-color: ${({ theme, type }) => type === 'primary' ? theme.colors.green400 : theme.colors.red300};
`

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    font-weight: bold;
`