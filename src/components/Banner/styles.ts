import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 144px;
    margin-bottom: 15px;

    border-radius: 15px;
`

export const ButtonContainer = styled.Pressable`
    width: 100%;
    height: 144px;

    border-radius: 15px;
`

export const ImageBanner = styled.Image.attrs({
    resizeMode:"contain"
})`
    width: 100%;
    height: 144px;

    border-radius: 15px;
`