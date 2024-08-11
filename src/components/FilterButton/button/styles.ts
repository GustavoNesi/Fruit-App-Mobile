import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ backgroundColor: string }>`
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 55px;
    background-color: ${props => props.backgroundColor};
    border-radius: 20px;
    border-color: ${({ theme }) => theme.colors.gray200};

    elevation: 8;

    /* Sombra para iOS */
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 5px;
`

export const ImageButton = styled.Image.attrs({
    resizeMode: 'contain'
})`
    
`
