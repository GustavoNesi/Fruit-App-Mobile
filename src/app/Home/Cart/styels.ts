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
    height: 400px;
    width: 100%;
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
    margin-bottom: 80px;
`




