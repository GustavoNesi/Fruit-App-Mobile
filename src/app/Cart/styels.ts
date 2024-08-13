import styled from "styled-components/native";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    flex: 1;
    margin-top: ${statusBarHeight + 8}px;
`

export const Header = styled.View`
    flex-direction: row;
    padding: 15px;
    height: 56px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
` 

export const ButtonContainer = styled.TouchableOpacity`
    width: 40px;
`

export const TextCart = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    text-align: center;
`

export const ContainerTextTotalItems = styled.View`
    height: 60px;
    width: 100%;
    justify-content: center;
`

export const List = styled.FlatList`
    padding-top: 2px;
    height: 500px;
    width: 100%;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-color: ${({ theme }) => theme.colors.gray100};
`

export const EmptyList = styled.View`
    padding-top: 2px;
    height: 500px;
    width: 100%;
    opacity: 0.7;
    justify-content: center;
    align-items: center;
`

export const EmptyText = styled.Text`
    font-weight: bold;
    font-size: 40px;
`

export const TotalItemsText = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: 22px;
    padding-left: 15px;  
    font-weight: bold;  
`

export const CardLayoutContainer = styled.View`
    height: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CheckoutContainer = styled.View`
    width: 100%;
    height: 300px;
`
export const PriceContainer = styled.View`
    height: 50px;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const PriceText = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: 22px;
    padding-right: 15px;  
    font-weight: bold; 
`

export const ButtonCheckoutContainer = styled.View`
    width: 100%;
    height: 80px;
    padding: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`

export const ButtonCheckout = styled.TouchableOpacity`
    width: 300px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.green400};
    border-radius: 20px;
    justify-content: center;
    align-items: center;   
`

export const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`



