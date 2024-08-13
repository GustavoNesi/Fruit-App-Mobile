import styled from "styled-components/native";

export const ContainerOpacity = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 250px;
    width: 370px;
    right: 6px;
    background-color: ${props => props.background_color};
    position: relative;
    opacity: 0.5;
    overflow: hidden;
    border-radius: 15px;
`
export const CartProductContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 250px;
    width: 370px;
    right: 0px;
    background-color: transparent;
    position: absolute;
`

export const ImageContainer = styled.View`
    width: 150px;
    height: 100%;
    padding: 10px;
`

export const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${props => props.background_color};
`
export const CardContainer = styled.View`
    height: 100%;
    width: 220px;
    padding: 10px;
`

export const CardHeader = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CardName = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`

export const CardDescription = styled.Text`
    width: 100%;
    height: 110px;
    padding: 5px;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.black};
`

export const CardPriceContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
`

export const Counter = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 85px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`
export const ButtonCounter = styled.TouchableOpacity`
    color: white;
    height: 100%;
    width: 40%;
    font-size: 10px;
    justify-content: center;
    align-items: center;
`
export const CounterValue = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 40px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray50};
`;

export const PriceText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`