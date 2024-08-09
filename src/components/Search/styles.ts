import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 10px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 20px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    flex: 1;
`