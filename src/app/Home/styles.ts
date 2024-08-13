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
    margin-bottom: 80px;
`

export const SearchContainer = styled.View`
    z-index: 1;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
`

export const InputContainer = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 10px;

    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 20px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    flex: 1;
`