import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 150px;
    background-color: ${({ theme }) => theme.colors.green400};
    border-radius: 15px;
`

export const Category = styled.Text`
    font-size: 20px;
    font-weight: bold;
`