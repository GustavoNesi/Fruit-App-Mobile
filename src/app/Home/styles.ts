import styled from "styled-components/native";

import Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const ScrollView = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.View`
    justify-content:center;
    flex: 1;
    align-items: center;
    margin-top: ${statusBarHeight + 8}px;
`

export const SearchContainer = styled.View`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
`