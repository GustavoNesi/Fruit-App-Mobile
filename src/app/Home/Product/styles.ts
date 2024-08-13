import styled from "styled-components/native";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    margin-top: ${statusBarHeight + 0}px;
    flex-direction: column;
    gap: 120px;
`
export const Header = styled.View`
    flex-direction: row;
    padding: 15px;
    height: 56px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const IconsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 20px;
`

export const BagContainer = styled.View`
    position: absolute; 
    right: 45px;
    bottom: 0.5px;
` 

export const BagCounter = styled.Text`
    position: relative; 
    background-color: ${({ theme }) => theme.colors.red500};
    border-radius: 1000px;
    width: 20px;
    height: 20px;
    bottom: 10px;
    left: 8px;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`

export const ContentWrapper = styled.View`
    position: relative; 
`;

export const ContentContainer = styled.View`
    background-color: ${props => props.backgroundColor};
    height: 620px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    opacity: 0.7; 
    align-items: center;
`;

export const NameContainer = styled.View`
    width: 100%;
    justify-content: center;
`
export const NameText = styled.Text`
    font-size: 60px;
    font-weight: bold;
    padding-top: 140px;
    padding-left: 25px;
    color: ${({ theme }) => theme.colors.white};
`

export const StarContainer = styled.Text`
    flex-direction: row;
    gap: 10px;
    padding-left: 25px;
`

export const PriceContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 90px;
    margin-top: 15px;
    margin-left: 30px;
    justify-content: space-between;
    align-items: center;
    border-top-width: 2px;
    border-color:${({ theme }) => theme.colors.white}; 
`

export const PriceText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
`
export const TextDescription = styled.Text`
    padding: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
`

export const Button = styled.TouchableOpacity`
    margin-top: auto;
    margin-bottom: 80px;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 70px;
    border-radius: 25px;
    background-color: ${props => props.backgroundColor};
`

export const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white} ;
`

export const ImageFruit = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 250px; 
    height: 250px; 
    position: absolute; 
    top: -120px; 
    left: 20%; 
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1000px;

    elevation: 8;

    /* Sombra para iOS */
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 5px;
`;

export const NotificationContainer = styled.View`
    position: absolute;
    top: 0;
    left: 100px;
    background-color: ${({ theme }) => theme.colors.green400};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    width: 50%;
    padding: 15px;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const NotificationText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: bold;
`;

