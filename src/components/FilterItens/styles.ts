import styled from 'styled-components/native';

type ItemProps = {
  backgroundColor: string;
};

export const Container = styled.View`
  height: 1000px;
  width: 500px;
  background-color: black;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  
`;

export const Item = styled.View`
  width: 180px;
  height: 220px;
  background-color: ${props => props.backgroundColor};
  opacity: 0.7;

  border-radius: 25px;

  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ItemImageContainer = styled.View`
  flex: 1;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 140px;
  height: 140px; 
`

export const ItemTextContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ItemDescriptionContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 15px;
  gap: 2px;
`;

export const ItemName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ItemPricePerKg = styled.Text`
  color: white;
  font-size: 14px;
  opacity: 0.6;
`;

export const ItemPrice = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`

export const ContainerPurchase = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;

  margin-left: auto;

  border-top-left-radius: 20px;
  border-bottom-right-radius: 25px;

  background-color: ${props => props.backgroundColor};
`