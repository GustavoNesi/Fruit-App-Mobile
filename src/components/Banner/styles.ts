import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 200px;

    border-radius: 15px;
    margin-top: 5px;
`

export const ButtonContainer = styled.Pressable`
    width: 100%;
    height: 200px;

    border-radius: 15px;
`

export const ImageBanner = styled.Image.attrs({
    resizeMode:"contain"
})`
    width: 100%;
    height: 200px;

    border-radius: 15px;
`