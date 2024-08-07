import { Container, Item, ItemText, RowContainer } from "./styles";

const items = [
    { id: '1', color: "#A02334", text: '1' },
    { id: '2', color: "#FFB22C", text: '2' },
    { id: '3', color:  "#522258", text: '3' },
    { id: '4', color: "#36BA98", text: '4' },
    { id: '5', color: "#346751", text: '5' },
    { id: '6', color: "#FFB22C", text: '6' },
    { id: '7', color:  "#522258", text: '7' },
    { id: '8', color: "#A02334", text: '8' },
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