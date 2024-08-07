import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: auto;

    width: 100%;
`

export const Text = styled.Text`
    font-size: 30px;

`

export const AvatarContainer = styled.Pressable`
    font-size: 30px;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    
    border-radius: 100px;
    background-color: black;
`

export const Img = styled.Image.attrs({
    resizeMode:"contain"
})`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`

export const MarketContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;

    border: 2px;
    border-color: ${({ theme }) => theme.colors.green400};
    border-radius: 100px;
`