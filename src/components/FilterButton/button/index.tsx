import { Category, Container } from "./styles";

type ItemProps = {title: string};

export function ButtonList({title}: ItemProps) {
    return(
        <Container>
            <Category>{title}</Category>
        </Container>
    )
}