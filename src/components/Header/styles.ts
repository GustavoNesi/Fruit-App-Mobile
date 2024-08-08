import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: auto;

    width: 100%;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const AvatarContainer = styled.Pressable`
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    
    border-radius: 100px;
    elevation: 10;    

    /* Sombra para iOS */
    shadow-color: #000;
    shadow-offset: 0px 2px; /* Note a mudança aqui */
    shadow-opacity: 0.2;
    shadow-radius: 5px;
`

export const Img = styled.Image.attrs({
    resizeMode:"contain"
})`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`

export const TextContainer = styled.View`
    flex-direction: column;
`

export const Title = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray300};
`
export const SubTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: bold;

`

export const MarketContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
`