import styled from 'styled-components/native';

export const Container = styled.View`
  height: 1000px;
  width: 500px;
  padding: 5px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  
`;

export const Item = styled.View`
  width: 180px;
  height: 220px;
  background-color: ${({ theme }) => theme.colors.green400};
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.green500};
  border: 2px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ItemText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;