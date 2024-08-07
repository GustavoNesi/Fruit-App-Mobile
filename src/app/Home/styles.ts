import styled from "styled-components/native";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const ScrollView = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray300};
`

export const Container = styled.View`
    justify-content:center;
    flex: 1;
    align-items: center;
    margin-top: ${statusBarHeight + 8}px;
`

export const SearchContainer = styled.View`
    flex-direction: column;


    height: 1100px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black}; 

    border: 4px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-color: ${({ theme }) => theme.colors.black};
`