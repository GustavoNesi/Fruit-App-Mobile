import styled from "styled-components/native";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    margin-top: ${statusBarHeight + 8}px;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    gap: 120px;
`
export const Header = styled.View`
    flex-direction: row;
    padding: 15px;
    height: 56px;
    width: 100%;
    justify-content: space-between;
`

export const ContentWrapper = styled.View`
    position: relative; 
`;

export const ContentContainer = styled.View`
    background-color: ${props => props.backgroundColor};
    height: 610px;
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

export const Counter = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 160px;
    height: 60px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
`

export const ButtonCounter = styled.TouchableOpacity`
    color: white;
    height: 100%;
    width: 40%;
    font-size: 18px;
    justify-content: center;
    align-items: center;
`

export const CounterValue = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 50px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray100};
`;

export const TextDescription = styled.Text`
    padding: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
`

export const Button = styled.TouchableOpacity`
    margin-top: auto;
    margin-bottom: 20px;
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
    color: ${({ theme }) => theme.colors.white} 
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
