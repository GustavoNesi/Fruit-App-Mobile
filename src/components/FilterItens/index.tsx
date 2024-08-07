import { Container, Item, ItemText, RowContainer } from "./styles";

const items = [
    { id: '1', color: 'red', text: '1' },
    { id: '2', color: 'blue', text: '2' },
    { id: '3', color: 'green', text: '3' },
    { id: '4', color: 'orange', text: '4' },
    { id: '5', color: 'purple', text: '5' },
    { id: '6', color: 'pink', text: '6' },
    { id: '7', color: 'pink', text: '7' },
    { id: '8', color: 'pink', text: '8' },
    // Adicione mais itens conforme necessário
  ];

export function Items() {
    return(
        <Container>
            <RowContainer>
                {items.map((item) => (
                <Item key={item.id} color={item.color}>
                    <ItemText>{item.text}</ItemText>
                </Item>
                ))}
            </RowContainer>
        </Container>
    )
}